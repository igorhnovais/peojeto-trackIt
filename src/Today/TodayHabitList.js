import styled from "styled-components";
import { useState } from "react";

import Check from "../assets/check.png"

export default function TodayHabitList({item}){

    const [show, setShow] = useState("none");

    function makeCheck(show){
        if(show === "none")
        setShow("flex");
        else {
            setShow("none");
        }
    }

    return(
        <>
            <DivHabitList onClick={()=> makeCheck(show)}> 
                <div>
                    <h1> {item.name} </h1>
                    <p> Sequência atual: {item.currentSequence} dias </p>
                    <p> Seu recorde: {item.highestSequence} dias </p>
                </div>
                <DivCheck show={show}>
                    <img src={Check}/>
                </DivCheck>
            </DivHabitList>
        </>
    )
}

const DivHabitList = styled.div`
    display: flex;
    justify-content: space-between;
    width: 350px;
    color: rgb(102,102,102);
    margin-bottom: 50px;
    & h1{
        font-size: 28px;
        padding-left: 5px;
        margin-bottom: 10px;
    }
    & p{
        padding-left: 5px;
    }
`

const DivCheck = styled.div`
    display: ${props => props.show};
    background-color: rgb(143,197,73);
    width: 69px;
    height: 69px;
    & img{
        padding: 20px;
    }
`