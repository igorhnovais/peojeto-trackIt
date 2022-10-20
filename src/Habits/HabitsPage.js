import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";


import Header from "../components/Header";
import Footer from "../components/Footer"
import Days from "./Days";
import Habits from "./Habits";
import { AuthContext } from "../components/Auth";


export default function HabitsPage(){

    const arrDays = ["D", "S", "T", "Q", "Q", "S", "S"];

    const [show, setShow] = useState("none");
    const [newHabit, setNewHabit] = useState("");
    const [daysWeek, setDaysWeek] = useState([]);
    const [habits, setHabits] = useState([]);
    const [habilit, setHabilit] = useState(false);
    const [opacity, setOpacity] = useState(false);
    const [disabled, setDisabled] = useState(false);
    let navigate = useNavigate();

    const {user, update, setUpdate} = useContext(AuthContext);

    function showCreate(){
        setShow("flex");
        setHabilit(false);
        setOpacity(false);
        setDisabled(false);
    }

    function cancelHabit(){
        setShow("none")
    }

    function createHabit(){
        
        setHabilit(true);
        setOpacity(true);
        setDisabled(true);

        const habitObj = {
            name: newHabit,
	        days: daysWeek 
        }
    

        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', habitObj, config)
        promise.then(res => {console.log(res.data); setUpdate([]); setNewHabit(''); setDaysWeek([]); cancelHabit()});
        promise.catch(err => {alert(err.response.data.mensage); setHabilit(false); setOpacity(false); setDisabled(false)}); 

    }

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }

        const require = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);

        require.then( (resp) => {setHabits(resp.data)});
        
        require.catch(err => {alert("seu tempo expirou"); navigate("/"); window.Location.reload()});

    }, [update]);

    function choiceDay(par){

        if(!daysWeek.includes(par)){
            setDaysWeek([...daysWeek, par])

        } else {
            let arr = daysWeek.filter((item) => item !== par);
            setDaysWeek([...arr]);
        }      
    }
   

    return (
        <>
            <Header/>
            
            <Nav>
                <SectionTop>
                    <h1> Meus hábitos </h1>
                    <button onClick={showCreate}> + </button>
                </SectionTop>

                <SectionCreateHabit show={show}>
                    
                        <input placeholder="nome do habito" value={newHabit} onChange={e => setNewHabit(e.target.value)}/>
                        <div>                           
                            <Days 
                            arrDays={arrDays}
                            func={choiceDay}
                            daysWeek={daysWeek}
                            disabled={disabled}
                           />
                        </div>                
                        <DivButton>
                            <ButtonCancel onClick={cancelHabit}> Cancelar </ButtonCancel>
                            <ButtonSalve onClick={createHabit} opacity={opacity} > { !habilit ? "Salvar" : <ThreeDots color={"white"}/>} </ButtonSalve>
                        </DivButton>
                    
                </SectionCreateHabit>

                

                <SectionAlert>
                    {(habits === 0) 
                    
                    ? 

                    (<p> Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>) 
                    
                    :
                    
                    (<div>
                        {habits.map((item, i) => <Habits item={item} key={i}/>)}
                    </div>)
                    }                  
                </SectionAlert>
            </Nav>

            <Footer/>
        </>
    )
}

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    
`

const SectionTop = styled.section`
    margin-top: 150px;
    width: 350px;
    display: flex;
    justify-content: space-between;   
    & h1{
        font-size: 30px;
        color: rgb(18, 107, 165);
    }
    & button{
        width: 40px;
        height: 35px;
        background-color: rgb(81, 182, 254);
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 24px;
    }
`

const SectionCreateHabit = styled.section`
    display: ${props => props.show};
    flex-direction: column;
    margin-top: 30px;
    & input{
        width: 303px;
        height: 45px;
        border: 1px solid rgb(207,207,207);
        ::placeholder{
            color: rgb(207,207,207);
            font-size: 20px; 
            padding-left: 10px;
        }
    }
`

const DivButton = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
`

const ButtonCancel = styled.button`
    width: 100px;
    height: 35px;
    font-size: 20px;
    color: rgb(81, 182, 254);
    border: none;
`

const ButtonSalve = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 35px;
    font-size: 20px;
    background-color: rgb(81, 182, 254);
    color: white;
    border: none;
    border-radius: 5px;
    opacity: ${props => props.opacity ? 0.6 : 1};
`

const SectionAlert = styled.section`
    display: flex;
    flex-direction: column;
    width: 350px;
    margin-top: 30px;
    font-size: 20px;
    color: rgb(102, 102, 102);
`