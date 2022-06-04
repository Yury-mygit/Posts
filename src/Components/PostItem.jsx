import React from 'react';
import RcButton from "./UI/Buttons/RcButton";
import classes from './PostItem.module.scss'
import {Link, useNavigate} from "react-router-dom";



const PostItem = (props) => {

let navigate = useNavigate();



    return (
            <div className="post">
                <div className="post...content">
                    <strong>{props.post.id}. {props.post.title} </strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>

                <div className="post...btns">
                    <RcButton onClick={ ()=>{
                        navigate("/posts/"+props.post.id);
                    } }>Open</RcButton>
                </div>


                <div className="post...btns">
                    <RcButton onClick={()=>props.remove(props.post)}>Delete</RcButton>
                </div>



            </div>
    );
};

export default PostItem;