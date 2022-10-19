import styled from "styled-components";
import { useState, useEffect  } from "react";
import axios from "axios";

import Header from "../components/Header";
import Footer from "../components/Footer"
import Days from "./Days";


export default function HabitsPage(){

    const arrDays = ["D", "S", "T", "Q", "Q", "S", "S"];

    const [show, setShow] = useState("none");
    const [habit, setHabit] = useState("");
    const [daysWeek, setDaysWeek] = useState([]);

    function showCreate(){
        setShow("flex");
    }

    function cancelHabit(){
        setShow("none")
    }


    function createHabit(){

        const habitObj = {
            name: habit,
	        days: daysWeek 
        }

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', habitObj)
        promise.then(alert('deu certo'));
        promise.catch(alert('deu errado'));
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
                    <form onSubmit={createHabit}>
                        <input placeholder="nome do habito" onChange={e => setHabit(e.target.event)}/>
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
                            <ButtonSalve type="submit" > Salvar </ButtonSalve>
                        </DivButton>
                    </form>
                </SectionCreateHabit>

                <SectionAlert>
                    <p> Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
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
    margin-top: 120px;
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
    }
`

const SectionCreateHabit = styled.section`
    display: ${props => props.show};
    flex-direction: column;
    margin-top: 30px;
    & input{
        width: 303px;
        height: 45px;
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
    width: 350px;
    margin-top: 30px;
    & p {
        font-size: 20px;
        color: rgb(102, 102, 102);
    }
`