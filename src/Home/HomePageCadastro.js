import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import Foto from "../assets/screenshot.jpg";
import {SectionImg, DivInput, DivA} from "./styled";



export default function HomePageCadastro(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");


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


        console.log(registration)

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", registration);
        
        promise.then((resp => {console.log('deu certo', resp)}));

        promise.catch((erro => {console.log('deu erro', erro)}));

    }


    return (
        <>
            <SectionImg>
                <img src={Foto}/>
            </SectionImg>

            <form onSubmit={SignUp}>
                <DivInput>
                    <input placeholder="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <input placeholder="senha" type="password" value={password}onChange={(e) => setPassword(e.target.value)}></input>
                    <input placeholder="nome"  value={name} onChange={(e) => setName(e.target.value)}></input>
                    <input placeholder="foto" type="url" value={photo} onChange={(e) => setPhoto(e.target.value)}></input>
                    <button type="submit"> cadastrar </button>
                </DivInput>
            </form>

            <DivA>
                <Link to="/">
                    <a> Já tem uma conta? Faça login </a>
                </Link>
            </DivA>
        </>
    )
}

