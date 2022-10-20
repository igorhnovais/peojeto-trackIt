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

    const goal = "Nenhum hábito concluído ainda"

    const [habitsList, setHabitsList] = useState([]);
    const {user} = useContext(AuthContext);
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
        promise.then(resp => setHabitsList(resp.data));
        promise.catch(err => {alert(err.response.data.mensage); navigate("/"); window.location.reload()});
    }, [])

    return (
        <>
            <Header/>

            <Nav>
                <SectionDay>
                    <h1> {today}</h1>
                    <p> {goal} </p>
                </SectionDay>
                <SectionHabits>
                    {(habitsList === 0)
                        ? 
                        (<h3> Seus habitos vão aparecer aqui...</h3>)
                        :
                        (<div> 
                            {habitsList.map((item) =>  <TodayHabitList item={item}/>)}                       
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
        font-size: 24px;
        color: rgb(186, 186, 186);
        margin-top: 10px;
    }
`

const SectionHabits = styled.section`
    margin-top :50px ;
    & h3{
        font-size: 24px;
    }
`