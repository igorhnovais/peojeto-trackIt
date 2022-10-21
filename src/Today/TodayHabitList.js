import styled from "styled-components";
//import { useState, useContext } from "react";
//import axios from "axios";


import Check from "../assets/check.png";
//import { AuthContext } from "../components/Auth";

export default function TodayHabitList({item, func}){

    //const {user} = useContext(AuthContext);

    

    return(
        <>
            <DivHabitList onClick={() => func(item)}> 
                <div>
                    <h1> {item.name} </h1>
                    <p> Sequência atual: {item.currentSequence} dias </p>
                    <p> Seu recorde: {item.highestSequence} dias </p>
                </div>
                <DivCheck done={item.done} >
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
    display: ${props => props.done ? "flex" : "none"};
    background-color: rgb(143,197,73);
    width: 69px;
    height: 69px;
    & img{
        padding: 20px;
    }
`