
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

import Foto from "../assets/logo.jpg";
import {Nav, SectionImg, DivInput, DivA, Button} from "./styled"
import { AuthContext } from "../components/Auth";

export default function HomePage(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [habilit, setHabilit] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [opacity, setOpacity] = useState(false);
   
    const {data} = useContext(AuthContext);
    
    function login(event){
        event.preventDefault();

        setHabilit(true);
        setDisabled(true);
        setOpacity(true);

        const loginObj = {
            email: email,
	        password: password
        }
       
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', loginObj);
        
        promise.then((resp => {data(resp.data.token, resp.data.image)}));

        promise.catch((erro => {alert(erro.response.data.message); setHabilit(false); setDisabled(false); setOpacity(false)}));
        
    }

    return (
        <>
            <Nav>
                <SectionImg>
                    <img src={Foto} alt="logo do TrackIt"/>
                </SectionImg>

                <form onSubmit={login}>
                    <DivInput>
                        <input disabled={disabled} placeholder="email" type="email" onChange={(e) => setEmail(e.target.value)}></input>
                        <input disabled={disabled} placeholder="senha" type="password" onChange={(e) => setPassword(e.target.value)}></input>
                        <Button opacityB={opacity}> { !habilit ? "Entrar" : <ThreeDots color={"white"}/>} </Button>
                    </DivInput>
                </form>

                <DivA>
                    <Link to="/cadastro">
                        Não tem uma conta? Cadastre-se! 
                    </Link>
                </DivA>
            </Nav>
        </>
    )
}

