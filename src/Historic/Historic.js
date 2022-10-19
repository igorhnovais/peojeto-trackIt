import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Historic(){
    return (
        <>
            <Header/>

            <Nav>
                <SectionHistoric>
                    <h1> Histórico </h1>
                    <p> Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                </SectionHistoric>
            </Nav>

            <Footer/>
        </>
    )
}

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const SectionHistoric = styled.section`
    margin-top: 120px;
    width: 350px;
    
    & h1{
        font-size: 30px;
        color: rgb(18, 107, 165);
    }
    & p {
        font-size: 24px;
        color: rgb(102, 102, 102);
        margin-top: 10px;
    }
`