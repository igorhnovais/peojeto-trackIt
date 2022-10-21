import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

import Foto from "../assets/logo.jpg";
import {Nav, SectionImg, DivInput, DivA, Button} from "./styled";


export default function HomePageCadastro(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");
    const [habilit, setHabilit] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [opacity, setOpacity] = useState(false);
    let navigate = useNavigate();


    function SignUp(event){
        event.preventDefault()

        setHabilit(true);
        setDisabled(true);
        setOpacity(true);

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
        
        promise.then((resp => {alert('parabéns por ter criado a sua conta'); navigate("/")}));

        promise.catch((erro => {alert(erro.response.data.message); setHabilit(false); setDisabled(false); setOpacity(false)}));

    }


    return (
        <>
            <Nav>
                <SectionImg>
                    <img src={Foto} alt="Logo do TrackIt"/>
                </SectionImg>

                <form onSubmit={SignUp}>
                    <DivInput>
                        <input disabled={disabled} placeholder="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        <input disabled={disabled} placeholder="senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        <input disabled={disabled} placeholder="nome"  value={name} onChange={(e) => setName(e.target.value)}></input>
                        <input disabled={disabled} placeholder="foto" type="url" value={photo} onChange={(e) => setPhoto(e.target.value)}></input>
                        <Button opacityB={opacity} type="submit"> { !habilit ? "Cadastrar" : <ThreeDots color={"white"}/>} </Button>
                    </DivInput>
                </form>

                <DivA>
                    <Link to="/">
                         Já tem uma conta? Faça login 
                    </Link>
                </DivA>
            </Nav>
        </>
    )
}

