import { Link } from "react-router-dom";
import styled from "styled-components"

import Foto from "../assets/screenshot.jpg";

export default function Footer(){
    return (
        <>
            <SectionFooter>
                <NavFooter>
                    <DivFooter>
                        <Link to="/habitos">
                            <h4> Hábitos </h4>
                        </Link>
                    </DivFooter>

                    <DivFooter>
                        <Link to="/hoje">
                            <img src={Foto} alt="porcentagem de tarefas feitas"></img>
                        </Link>
                    </DivFooter>

                    <DivFooter>
                        <Link to="/historico">
                            <h4> Histórico </h4>
                        </Link>
                    </DivFooter>
                </NavFooter>
            </SectionFooter>
        </>
    )
}

const SectionFooter = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
`

const NavFooter = styled.nav`
    width: 350px;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
`

const DivFooter = styled.div`
   display: flex;
   align-items: end;
    & h4{
        font-size: 24px;
        color: rgb(81, 182, 254)
    } 
    & img{
        width: 80px;
        border-radius: 50px;
    }
`

