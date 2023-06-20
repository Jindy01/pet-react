import React from 'react';
import Navbar from "./UI/Navbar/Navbar";
import {BrowserRouter, Navigate, Route, Routes, useParams} from "react-router-dom";
import PostIdPage from "../pages/PostIdPage";
import {routes} from '../router'


const AppRouter = () => {
    return (
        <Routes>
            {/*<Route path='/' element={<Navigate to='/posts' replace={true}/>}/>*/}

            {routes.map(route => {
                <Route
                    path={route.path}
                    element={route.component}
                    match={route.match}
                />
            })}
            {/*<Route path='*' element={<Navigate to='/error' replace={true}/>}/>*/}

        </Routes>
    );
};

export default AppRouter;