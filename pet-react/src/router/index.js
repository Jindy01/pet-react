import React from 'react';
import PostIdPage from "../pages/PostIdPage";
import Posts from '../pages/Posts';
import About from '../pages/About'

export const routes = [
    {path: '/about', component: About, match: true,},
    {path: '/posts', component: Posts, match: true,},
    {path: '/posts/:id', component: PostIdPage, match: true,},
]