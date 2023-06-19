import React from 'react';
import './styles/App.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts"
import Navbar from "./Components/UI/Navbar/Navbar";
import Error from "./pages/Error";
import AppRouter from "./Components/AppRouter";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    );
}



//      Приостановлено из-за библеотеки "react-router-dom"

export default App;