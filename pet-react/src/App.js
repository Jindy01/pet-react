import React, { useState, useRef } from 'react';
// import Counter from './Components.JSX/Counter';
import ClassCounter from './Components/ClassCounter.jsx';
import './styles/App.css';
import PostList from "./Components/PostList";
import PostItem from "./Components/PostItem";
import MyButton from "./Components/UI/button/MyButton";
import MyInput from "./Components/UI/input/MyInput";
import PostForm from "./Components/PostForm";
import MySelect from "./Components/UI/select/MySelect";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Бетус', body: 'Коморе'},
        {id: 2, title: 'Артус', body: 'Лемпо'},
        {id: 3, title: 'Питус', body: 'Фортейн'},
    ])
    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    function getSortedPosts() {

    }

    const sortedPosts = [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
}
//Передаём пост из дочернего компонента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
}
    const sortPosts = (sort) => {
        setSelectedSort(sort);
    }

  return (
    <div className="App">
        <PostForm create={createPost}></PostForm>
        <hr style={{margin: '15px 0'}}/>
        <div>
            <MyInput
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder='Поиск'
            />

            <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaultValue={'Сортировка'}
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'},
                ]}
            />
        </div>
        {posts.length
            ?
            <PostList remove={removePost} posts={selectedSort} title='JavaScript'></PostList>
            :
            <h1 style={{textAlign: 'center'}}>
                Посты не найдены
            </h1>
        }
     </div>
  )
}

export default App;