import styled from "styled-components"
import axios from "axios";
import { useContext } from "react";

import Trash from "../assets/Vector.png"
import { AuthContext } from "../components/Auth";

export default function Habits({item}){

    const arrDays = ["D", "S", "T", "Q", "Q", "S", "S"];
    const arrDaySelectd = item.days;
    const {user, setUpdate} = useContext(AuthContext);


    function deleteHabit(){
       if( window.confirm("Deseja excluir esse hábito??")){

            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            }

            const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${item.id}`, config);
            promise.then(resp => {setUpdate([])});
            promise.catch(err => alert(err.response.data.message));
        }
        
    }

  
    return (
        <>
            <DivCreatedHabit>
                <Div>
                    <h2> {item.name} </h2>
                    <img src={Trash} alt="lixo" onClick={deleteHabit}/>
                </Div>
                <div>
                    {arrDays.map((item, i) => <DivSelect 
                    colorA={ arrDaySelectd.includes(i) ? true : false }
                    background={ arrDaySelectd.includes(i) ? true : false }
                    key={i}
                    > <p>{item}</p> </DivSelect>                  
                    )}
                </div>
            </DivCreatedHabit>
        </>
    )
}

const DivCreatedHabit = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.35);
    & div{
        margin-top: 10px;
        margin-right: 5px;
        display: flex;
        font-size: 24px;
    }
`

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    & h2{
        font-size: 24px;
    }
    & img{
        width: 16px;
        height: 18px;
        :hover{
            cursor: pointer;
        }
    }
`

const DivSelect = styled.div`
    display: flex;
    width: 30px;
    height: 30px;
    background-color: ${props => props.background ? "rgb(207, 207, 207)" : "white"};
    color: ${props => props.colorA ? "white" : "rgb(207, 207, 207)"};
    border: 1px solid rgb(207, 207, 207);
    border-radius: 2px;
    & p {  
        display: flex;
        font-size: 24px;
        font-weight: 700;
        align-items: center;
        justify-content: center;
    }
`
