import React from 'react';
import MyButton from "./UI/button/MyButton";

//Шаблон создания поста его название и содержание
const PostItem = (props) => {
    console.log(props)
    return (
        <div className="post">
            <div className='post__content'>
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
                <div className="post__btns">
                    <MyButton onClick={() => props.remove(props.post)}>
                        Удалить
                    </MyButton>
                </div>
            </div>
        </div>
    );
};

export default PostItem;