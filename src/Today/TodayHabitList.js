import styled from "styled-components";

import Check from "../assets/check.png";

export default function TodayHabitList({item, func}){

    
    return(
        <>
            <DivHabitList onClick={() => func(item)}  > 
                <div>
                    <h1> {item.name} </h1>
                    <p> Sequência atual: <SpanSequence corSequence={item.done}>{item.currentSequence} {item.currentSequence < 2 ? "dia" : "dias"}</SpanSequence> </p>
                    <p> Seu recorde: <SpanRecord corRecord={(item.done === true && item.currentSequence === item.highestSequence && item.highestSequence !== 0)}>{item.highestSequence} {item.highestSequence < 2 ? "dia" : "dias"} </SpanRecord></p>
                </div>
                <DivCheck done={item.done} >
                    <img src={Check} alt="icone check"/>
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
    margin-bottom: 30px;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    & h1{
        font-size: 28px;
        padding-left: 5px;
        margin-bottom: 10px;
    }
    & p{
        padding-left: 5px;
    }
    
`

const SpanSequence = styled.span`
    padding-left: 5px;
    color: ${props => props.corSequence ? "green" : "rgb(102,102,102)"};
`

const SpanRecord = styled.span`
    padding-left: 5px;
    color: ${props => props.corRecord ? "green" : "rgb(102,102,102)"};
    
`

const DivCheck = styled.div`
    display: flex;
    background-color: ${props => props.done ? "rgb(143,197,73)" : "rgb(219,219,219)"};
    width: 69px;
    height: 69px;
    & img{
        padding: 20px;
    }
`