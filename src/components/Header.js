import styled from "styled-components";
import { useContext } from "react";
import { Link } from "react-router-dom";


import { AuthContext } from "../components/Auth";

export default function Header(){

    const {user} = useContext(AuthContext)

    return(
        <>
            <SectionHeader>
                <div>
                    <Link to="/">
                        <h1>TrackIt</h1>
                    </Link>
                    <img src={user.image} alt="Foto do usuario"></img>
                </div>
            </SectionHeader>
        </>
    )
}

const SectionHeader = styled.section`
    font-family: 'Playball';
    background-color: rgb(18, 107, 165);
    padding: 20px;
    position: fixed;
    display: flex;
    justify-content: center;
    width: 100%;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.35);
    & div{
        width: 303px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    & h1{
        font-size: 50px;
        color: white;
    }
    & img{
        max-width: 60px;
        max-height: 60px;
        border-radius: 51px;
        border: 2px solid white;
        font-family: 'roboto';
    }
    & a{
        text-decoration: none;
    }
`

