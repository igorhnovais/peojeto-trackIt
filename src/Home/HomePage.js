
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Foto from "../assets/screenshot.jpg";
import {Nav, SectionImg, DivInput, DivA} from "./styled"

export default function HomePage(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    function login(event){
        event.preventDefault();

        const loginObj = {
            email: email,
	        password: password
        }
       

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', loginObj);
        
        promise.then((resp => {alert('deu certo', resp)}));

        promise.catch((erro => {console.log('deu erro', erro)}));

        navigate("/hoje");

    }
    return (
        <>
            <Nav>
                <SectionImg>
                    <img src={Foto}/>
                </SectionImg>

                <form onSubmit={login}>
                    <DivInput>
                        <input placeholder="email" type="email" onChange={(e) => setEmail(e.target.value)}></input>
                        <input placeholder="senha" type="password" onChange={(e) => setPassword(e.target.value)}></input>
                        <button type="submit"> Entrar </button>
                    </DivInput>
                </form>

                <DivA>
                    <Link to="/cadastro">
                        <a> Não tem uma conta? Cadastre-se! </a>
                    </Link>
                </DivA>
            </Nav>
        </>
    )
}

