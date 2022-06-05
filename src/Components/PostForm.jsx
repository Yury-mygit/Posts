import React from 'react';
import RcInput from "./UI/Inputs/RcInput";
import RcButton from "./UI/Buttons/RcButton";
import {useState} from "react";

const PostForm = ({create}) =>{

    const [post, setPost] = useState({title:'',body:''})

    const addNewPost = (e) =>{
        e.preventDefault()

        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title:'',body:''})
    }



return (
        <form>
            {/*Управляемый компонет*/}
            <RcInput
                value = {post.title}
                onChange = {e=>setPost({...post, title:e.target.value})}
                type='text'
                placeholder='Название поста'
            />
            {/*Неуправляемый/ Неконтролируемый компонент*/}
            <RcInput
                value = {post.body}
                onChange = {e=>setPost({...post, body:e.target.value})}
                type='text'
                placeholder='Описание поста'
            />
            <RcButton onClick={addNewPost}>Создать пост</RcButton>
        </form>

    );
};

export default PostForm;