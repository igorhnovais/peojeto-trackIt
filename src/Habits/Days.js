import styled from "styled-components"

export default function Days({daysWeek, arrDays, func, disabled}){

    return (
        <>
            {arrDays.map((item, i) => <Button 
            disabled={disabled} 
            onClick={() => func(i)} 
            color ={daysWeek.includes(i) ? "rgb(207,207,207)" : "white"}
            cor={daysWeek.includes(i) ?  "white" : "rgb(207,207,207)" }
            key={i}
            data-identifier="week-day-btn"> 
            {item}
            </Button>)}   
        </>
    )
}

const Button = styled.button`
    width: 30px;
    height: 30px;
    margin-top: 10px;
    margin-right: 5px;
    background-color: ${props => props.color};
    border: 1px solid rgb(207,207,207);
    border-radius: 4px;
    color: ${props => props.cor};
    font-size: 20px;
    :hover{
        cursor: pointer;
    }
`
