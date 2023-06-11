import React, { useState, useRef } from 'react';
// import Counter from './Components.JSX/Counter';
import ClassCounter from './Components/ClassCounter.jsx';
import './styles/App.css';
import PostList from "./Components/PostList";
import PostItem from "./Components/PostItem";
import MyButton from "./Components/UI/button/MyButton";
import MyInput from "./Components/UI/input/MyInput";
import PostForm from "./Components/PostForm";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript 1', body: 'Description'},
        // {id: 2, title: 'JavaScript 2', body: 'Description'},
        // {id: 3, title: 'JavaScript 3', body: 'Description'},
    ])
const createPost = (newPost) => {
        setPosts([...posts, newPost])

}

  return (
    <div className="App">
        <PostForm create={createPost}></PostForm>
        <PostList posts={posts} title='JavaScript'></PostList>
     </div>
  )
}

export default App;