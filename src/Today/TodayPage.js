import styled from "styled-components"
import { useState, useContext } from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Todaypage(){

    const [goal, setGoal] = useState("Nenhum hábito concluído ainda");

    

    return (
        <>
            <Header/>

            <Nav>
                <SectionDay>
                    <h1> Segunda, 17/05</h1>
                    <p> {goal} </p>
                </SectionDay>
                <SectionHabits>
                    <h3> Seus habitos vão aparecer aqui...</h3>
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