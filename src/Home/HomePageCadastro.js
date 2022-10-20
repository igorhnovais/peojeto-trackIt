import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Foto from "../assets/logo.jpg";
import {Nav, SectionImg, DivInput, DivA} from "./styled";



export default function HomePageCadastro(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");
    let navigate = useNavigate();


    function SignUp(event){
        event.preventDefault()

        const registration = {
            email: email ,
            name: name,
            image: photo,
            password: password
        }
     
            // "igor@homail.com"
            // id : 5841
            // password : "kjshdoijasi"


        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", registration);
        
        promise.then((resp => {alert('deu certo', resp)}));

        promise.catch((erro => {console.log('deu erro', erro)}));

        navigate("/");

    }


    return (
        <>
            <Nav>
                <SectionImg>
                    <img src={Foto} alt="Logo do TrackIt"/>
                </SectionImg>

                <form onSubmit={SignUp}>
                    <DivInput>
                        <input placeholder="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        <input placeholder="senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        <input placeholder="nome"  value={name} onChange={(e) => setName(e.target.value)}></input>
                        <input placeholder="foto" type="url" value={photo} onChange={(e) => setPhoto(e.target.value)}></input>
                        <button type="submit"> cadastrar </button>
                    </DivInput>
                </form>

                <DivA>
                    <Link to="/">
                        <a href="/"> Já tem uma conta? Faça login </a>
                    </Link>
                </DivA>
            </Nav>
        </>
    )
}

