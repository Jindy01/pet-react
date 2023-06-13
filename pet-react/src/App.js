import React, { useState, useRef, useMemo } from 'react';
// import Counter from './Components.JSX/Counter';
import ClassCounter from './Components/ClassCounter.jsx';
import './styles/App.css';
import PostList from "./Components/PostList";
import PostItem from "./Components/PostItem";
import MyButton from "./Components/UI/button/MyButton";
import MyInput from "./Components/UI/input/MyInput";
import PostForm from "./Components/PostForm";
import MySelect from "./Components/UI/select/MySelect";
import PostFilter from "./Components/PostFilter";
import MyModal from "./Components/UI/MyModal/MyModal";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Бетус', body: 'Коморе'},
        {id: 2, title: 'Артус', body: 'Лемпо'},
        {id: 3, title: 'Питус', body: 'Фортейн'},
    ])
    const [filter, setFilter] = useState({sort: '', query: '',})
    const [modal, setModal] = useState(false);

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    }, [filter, posts])

    const sortedAndSearchPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
}
//Передаём пост из дочернего компонента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
}

  return (
    <div className="App">
        <MyButton
            style={{marginTop: 25}}
            onClick={() => setModal(true)}>
            Создать пост
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost}></PostForm>
        </MyModal>
        <hr style={{margin: '15px 0'}}/>
        <PostFilter
            filter={filter}
            setFilter={setFilter}
        />
            <PostList remove={removePost} posts={sortedAndSearchPosts} title='JavaScript'></PostList>
     </div>
  )
}

export default App;