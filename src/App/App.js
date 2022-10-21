import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../components/GlobalStyle";

import HomePage from "../Home/HomePage.js"
import HomePageCadastro from "../Home/HomePageCadastro.js"
import TodayPage from "../Today/TodayPage.js"
import HabitsPage from "../Habits/HabitsPage.js";
import Historic from "../Historic/Historic.js";
import AuthProvider from "../components/Auth";


export default function App() {
 
    return (
        <BrowserRouter>
            <GlobalStyle/>
            
            <AuthProvider>
                <Routes>
                    <Route path={"/"} element={<HomePage />} />
                    <Route path={"/cadastro"} element={<HomePageCadastro/>} />
                    <Route path={"/hoje"} element={<TodayPage/>} />
                    <Route path={"/habitos"} element={<HabitsPage/>} />
                    <Route path={"/historico"} element={<Historic/>} />
                </Routes>
            </AuthProvider>

        </BrowserRouter>
    )
}
