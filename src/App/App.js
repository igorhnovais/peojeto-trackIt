import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../Home/HomePage.js"
import HomePageCadastro from "../Home/HomePageCadastro.js"
import GlobalStyle from "../components/GlobalStyle"


export default function App() {

    
    return (
        <BrowserRouter>
            <GlobalStyle/>

            <Routes>
                <Route path={"/"} element={<HomePage />} />
                <Route path={"/cadastro"} element={<HomePageCadastro/>} />
            </Routes>

        </BrowserRouter>
    )
}