import React, {useContext} from 'react';
import Navbar from "./UI/Navbar/Navbar";
import {BrowserRouter, Navigate, Route, Routes, useParams} from "react-router-dom";
import {publicRoutes, privateRoutes} from '../router'
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";


const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if(isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ? // Тернальный оператор
            <Routes>
                <Route path='/' element={<Navigate to='/error' replace={true}/>}/>
                {privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={<route.component/>}
                        key={route.path}
                    />
                )}
                <Route path='*' element={<Navigate to='/posts' replace={true}/>}/>

            </Routes>
            : // Подопечный тернального оператора
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={<route.component/>}
                        key={route.path}
                    />
                )}
                <Route path='*' element={<Navigate to='/login' replace={true}/>}/>
            </Routes>

    );
};

export default AppRouter;