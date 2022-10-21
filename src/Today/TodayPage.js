import styled from "styled-components"
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
import { useNavigate } from "react-router-dom";

import Header from "../components/Header"
import Footer from "../components/Footer"
import TodayHabitList from "./TodayHabitList";
import { AuthContext } from "../components/Auth";


export default function Todaypage(){

    const [habitsList, setHabitsList] = useState([]);
    const {user, setUpdate, update, setPorcentage, porcentage} = useContext(AuthContext);
    

    let navigate = useNavigate();

    let today = dayjs().locale('pt-br').format('dddd, DD/MM');
    today = today[0].toUpperCase() + today.substring(1).replace('-feira', '');

    

    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }

       const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config);

        promise.then(checkHabits);

        function checkHabits(resp){

            setHabitsList(resp.data);
    
            let arr = resp.data.filter((item) => item.done === true);
            let um = resp.data.length;
    
            if(arr !== 0 && um !== 0){
                const final = (arr.length / um) * 100;
                setPorcentage(final)
            } 
        }

        promise.catch(err => {alert("Seu tempo expirou!"); navigate("/"); window.location.reload()});

    }, [update, navigate, user.token, setPorcentage])



    function makeCheck(item){
        
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }

        if(item.done === false){

        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${item.id}/check`, null, config);
        promise.then(resp => {setUpdate([])});
        promise.catch(err => alert(err.response.data.mensage));

        } else {

        const require = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${item.id}/uncheck`, null, config);
        require.then(resp => {setUpdate([])});
        require.catch(err => alert(err.response.data.mensage));
            
        }
    }

    
    

    return (
        <>
            <Header/>

            <Nav>
                <SectionDay >
                    <h1> {today}</h1>
                    {(porcentage === 0) 
                    ? 
                    (<p> Nenhum hábito concluído ainda </p>) 
                    : 
                    (<span> {porcentage.toFixed(0)}% dos hábitos concluídos </span> )}
                </SectionDay>
                <SectionHabits>
                    {(habitsList === 0 )
                        ? 
                        (<h3> Nenhum habito hoje!</h3>)
                        :
                        (<div> 
                            {habitsList.map((item, i) =>  <TodayHabitList func={makeCheck} item={item} key={i}/>)}                       
                        </div>)
                    }
                    
                </SectionHabits>
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
    margin-bottom: 100px;
`

const SectionDay = styled.section`
    margin-top: 120px;
    width: 350px;
    
    & h1{
        font-size: 30px;
        color: rgb(18, 107, 165);
    }
    & p {
        font-size: 22px;
        color:rgb(186,186,186);
        margin-top: 20px;
    }
    & span{
        font-size: 22px;
        color: rgb(143,197,73);
        margin-top: 20px;;
    }
`

const SectionHabits = styled.section`
    margin-top :50px ;
    & h3{
        font-size: 24px;
    }
`