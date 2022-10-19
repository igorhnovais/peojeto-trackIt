import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer"
import Days from "./Days";


export default function HabitsPage(){

    const arrDays = ["D", "S", "T", "Q", "Q", "S", "S"];

    function showCreate(){

    }

    return (
        <>
            <Header/>
            
            <Nav>
                <SectionTop>
                    <h1> Meus hábitos </h1>
                    <button onClick={showCreate}> + </button>
                </SectionTop>

                <SectionCreateHabit>
                    <input placeholder="nome do habito"/>
                    <div>
                        {arrDays.map((item, i) => <Days day={item} key={i}/>)}
                    </div>
                    <DivButton>
                        <ButtonCancel> Cancelar </ButtonCancel>
                        <ButtonSalve> Salvar </ButtonSalve>
                    </DivButton>
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
    display: flex;
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
    & p {
        font-size: 20px;
        color: rgb(102, 102, 102);
        margin-top: 10px;
    }
`