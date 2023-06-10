import React, { useState } from 'react';
// import Counter from './Components.JSX/Counter';
import ClassCounter from './Components/ClassCounter.jsx';
import './styles/App.css';
import PostList from "./Components/PostList";
import PostItem from "./Components/PostItem";
import MyButton from "./Components/UI/button/MyButton";
import MyInput from "./Components/UI/input/MyInput";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript 1', body: 'Description'},
        {id: 2, title: 'JavaScript 2', body: 'Description'},
        {id: 3, title: 'JavaScript 3', body: 'Description'},
    ])

    const [title, setTitle] = useState('')
    const addNewPost = (e) => {
        e.preventDefault();
        console.log(title)
    }


  return (
    <div className="App">
        <form>
            {/* Управляемый компонент */}
            <MyInput
                value={title}
                onChange={e => setTitle(e.target.value)}
                type="text"
                placeholder='Название поста'/>
            <MyInput type="text" placeholder='Описание поста'/>
            <MyButton onClick={addNewPost}>Создать пость</MyButton>
        </form>
        <PostList posts={posts} title='JavaScript'></PostList>
     </div>
  )
}

export default App;