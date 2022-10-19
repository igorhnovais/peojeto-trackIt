import styled from "styled-components"

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`


export const SectionImg = styled.section`
    display: flex;
    justify-content: center;
    & img{
        width: 250px;
    }
`

export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & input{
        width: 303px;
        height: 45px;
        margin-top: 10px;
    }
    & button{
        width: 303px;
        margin-top: 10px;
        height: 45px;
    }   
`

 export const DivA = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`
