import styled from "styled-components"

export default function Days({day}){
    return (
        <>
            <Button> {day}</Button>
        </>
    )
}

const Button = styled.button`
    width: 30px;
    height: 30px;
    margin-top: 10px;
    margin-right: 5px;
`