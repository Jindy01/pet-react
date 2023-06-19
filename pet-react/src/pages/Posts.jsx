import React, {useEffect, useState} from 'react';
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import MyButton from "../Components/UI/button/MyButton";
import MyModal from "../Components/UI/MyModal/MyModal";
import PostForm from "../Components/PostForm";
import Loader from "../Components/UI/Loader/Loader";
import Pagination from "../Components/UI/pagination/Pagination";
import PostList from "../Components/PostList";
import PostFilter from "../Components/PostFilter";


//2:00 мин Домашнее задание в виде UseMemo()//
//1:52 мин https://www.youtube.com/watch?v=GNrdg3PzpJQ&t=5800s //

function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: '',});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit))
    })

    useEffect(() => {
        fetchPosts(limit, page)
    }, [])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }
//Передаём пост из дочернего компонента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const changePage = (page) => {
        setPage(page)
        fetchPosts(limit, page)
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
            {postError &&
                <h1>Произошла ошибка ${postError}</h1>
            }
            {isPostsLoading
                ? <div style={{display: "flex", justifyContent: "center", marginTop: 50}}> <Loader/> </div>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title='JavaScript'></PostList>
            }
            <Pagination page={page}
                        changePage={changePage}
                        totalPages={totalPages}
            />
        </div>
    )
}

export default Posts;