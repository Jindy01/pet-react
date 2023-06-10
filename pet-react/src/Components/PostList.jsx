import React from 'react';
import PostItem from "./PostItem";

//Создаёт список постов , примнимает название и содрежание с props(),
//находящегося в App.js
const PostList = ({posts, title}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {posts.map((post) => <PostItem post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;