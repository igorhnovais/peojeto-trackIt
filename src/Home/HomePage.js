
import { Link } from "react-router-dom";

import Foto from "../assets/screenshot.jpg";
import {SectionImg, DivInput, DivA} from "./styled"

export default function HomePage(){
    return (
        <>
            <SectionImg>
                <img src={Foto}/>
            </SectionImg>
            <DivInput>
                <input placeholder="email"></input>
                <input placeholder="senha"></input>
                <button> Entrar </button>
            </DivInput>
            <DivA>
                <Link to="/cadastro">
                    <a> Não tem uma conta? Cadastre-se! </a>
                </Link>
            </DivA>
        </>
    )
}

