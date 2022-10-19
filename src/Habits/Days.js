import { useState } from "react"
import styled from "styled-components"

export default function Days({day, setDaysWeek, daysWeek, id}){

    const [color, setColor] = useState("rgb(255, 255, 255)")

    function choiceDay(event){
        event.preventDefault();

        if(color === "rgb(255, 255, 255)"){
        setColor("rgb(207, 207, 207)");
        setDaysWeek([...daysWeek, id])

        } else {
            setColor("rgb(255, 255, 255)");
            let arr = daysWeek.filter((item) => item !== id);
            setDaysWeek([...arr]);
        }

        
    }

    return (
        <>
            <Button onClick={choiceDay} color={color} id={id}> {day}</Button>
        </>
    )
}

const Button = styled.button`
    width: 30px;
    height: 30px;
    margin-top: 10px;
    margin-right: 5px;
    background-color: ${props => props.color} ;
`