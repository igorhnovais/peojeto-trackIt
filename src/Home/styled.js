import styled from "styled-components"

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: white;
    padding-bottom: 150px;
`


export const SectionImg = styled.section`
    margin-top: 100px;
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
        border: 1px solid rgb(207,207,207);
        border-radius: 3px;
        ::placeholder{
            font-size: 20px;
            color: rgb(207,207,207);
            padding-left: 10px;
        }
    }
      
`

export const Button = styled.button`
    background-color: rgb(81, 182, 254);
    color: white;
    font-size: 20px;
    border: none;
    border-radius: 3px;
    width: 303px;
    margin-top: 10px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${props => props.opacity ? 0.6 : 1};
`

export const DivA = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 25px;
    & a{
        color:rgb(81, 182, 254);
    }
`
