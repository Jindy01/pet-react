import React from 'react';
import Navbar from "./UI/Navbar/Navbar";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";

const AppRouter = () => {
    return (
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/about' element={<About />}/>

                    <Route path='/posts' element={<Posts/>}/>

                    <Route path='/error' element={<Error/>}/>

                    <Route path='*' element={<><Navigate to='/error' replace={true}/></>}/>

                    // Доделать что бы можно было перемещаться между страничками //
                </Routes>
            </BrowserRouter>
    );
};

export default AppRouter;