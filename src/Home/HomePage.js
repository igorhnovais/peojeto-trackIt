
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";


import Foto from "../assets/logo.jpg";
import {Nav, SectionImg, DivInput, DivA} from "./styled"
import { AuthContext } from "../components/Auth";

export default function HomePage(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
    const {data} = useContext(AuthContext);
    

    function login(event){
        event.preventDefault();

        const loginObj = {
            email: email,
	        password: password
        }
       

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', loginObj);
        
        promise.then((resp => {data(resp.data.token, resp.data.image)}));

        promise.catch((erro => {console.log('deu erro', erro)}));

        
        

    }
    return (
        <>
            <Nav>
                <SectionImg>
                    <img src={Foto} alt="logo do TrackIt"/>
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
                        <a href="/"> Não tem uma conta? Cadastre-se! </a>
                    </Link>
                </DivA>
            </Nav>
        </>
    )
}

