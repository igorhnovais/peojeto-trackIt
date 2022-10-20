import styled from "styled-components";
import { useState, useContext, useEffect   } from "react";
import axios from "axios";


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

    const {user, update, setUpdate} = useContext(AuthContext);

    function showCreate(){
        setShow("flex");
    }

    function cancelHabit(){
        setShow("none")
    }

    // console.log(daysWeek);
    // console.log(newHabit);

    function createHabit(){
        

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
        promise.then(res => {console.log(res.data); setUpdate([])});
        promise.catch(err => alert(err.response.data)); 
    }

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }

        const require = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);

        require.then(createdHabits);

        function createdHabits (resp){
            setHabits(resp.data);
            console.log(resp.data)
        }

        require.catch(err => {alert("deu erro")})
    }, [update]);


   

    return (
        <>
            <Header/>
            
            <Nav>
                <SectionTop>
                    <h1> Meus hábitos </h1>
                    <button onClick={showCreate}> + </button>
                </SectionTop>

                <SectionCreateHabit show={show}>
                    
                        <input placeholder="nome do habito" onChange={e => setNewHabit(e.target.value)}/>
                        <div>
                            {arrDays.map((item, i) => 
                            <Days day={item} 
                            setDaysWeek={setDaysWeek}
                            daysWeek={daysWeek}
                            id={i}
                            key={i}/>)}
                        </div>                
                        <DivButton>
                            <ButtonCancel onClick={cancelHabit}> Cancelar </ButtonCancel>
                            <ButtonSalve onClick={createHabit} > Salvar </ButtonSalve>
                        </DivButton>
                    
                </SectionCreateHabit>

                

                <SectionAlert>
                    {(habits === 0) 
                    
                    ? 

                    (<p> Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>) 
                    
                    :
                    (
                    <div>
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
    width: 100px;
    height: 35px;
    font-size: 20px;
    background-color: rgb(81, 182, 254);
    color: white;
    border: none;
    border-radius: 5px;
`

const SectionAlert = styled.section`
    display: flex;
    flex-direction: column;
    width: 350px;
    margin-top: 30px;
    & p {
        font-size: 20px;
        color: rgb(102, 102, 102);
    }
`