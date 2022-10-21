import { Link } from "react-router-dom";
import styled from "styled-components"
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { useContext } from "react";

import { AuthContext } from "./Auth";

export default function Footer(){

    const {porcentage} = useContext(AuthContext)
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
                            <CircularProgressbarWithChildren value={porcentage}
                                background
                                backgroundPadding={6}
                                styles={buildStyles({
                                    backgroundColor: "#52B6FF",
                                    textColor: "#fff",
                                    pathColor: "#fff",
                                    trailColor: "transparent",
                                    strokeLinecap: 'round'
                                })}> <span> Hoje </span> </CircularProgressbarWithChildren>
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
    height: 70px;
    position: fixed;
    bottom: 0;
    left: 0;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.35);
    background-color: white;
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
        color: rgb(81, 182, 254);
        margin-bottom: 60px;
    } 
    & svg{
        width: 100px;
        height: 100px;
        margin-bottom: 50px;
    }
    & a{
        text-decoration: none;
        color: white;
        font-size: 20px;
    }
    & span{
        display: flex;
        margin-bottom: 150px;
    }
`

