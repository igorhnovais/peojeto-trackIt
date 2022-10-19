import styled from "styled-components";
import { useContext } from "react";


import { AuthContext } from "../components/Auth";

export default function Header(){

    const {user} = useContext(AuthContext)

    return(
        <>
            <SectionHeader>
                <div>
                    <h1>TrackIt</h1>
                    <img src={user.image} alt="Foto do usuario"></img>
                </div>
            </SectionHeader>
        </>
    )
}

const SectionHeader = styled.section`
    background-color: rgb(18, 107, 165);
    padding: 20px;
    position: fixed;
    display: flex;
    justify-content: center;
    width: 100%;
    & div{
        width: 303px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    & h1{
        font-size: 40px;
        color: white;
    }
    & img{
        width: 51px;
        border-radius: 51px;
        border: 2px solid white;
    }
`

