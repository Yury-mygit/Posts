import React, {useEffect, useMemo, useRef, useState} from "react";
// import "./App.scss"
import PostList from ".././Components/PostList";
import RcButton from ".././Components/UI/Buttons/RcButton";
import PostForm from ".././Components/PostForm";
import PostFilter from ".././Components/PostFilter";
import RcModal from ".././Components/UI/ModalWindow/RcModal";

import {usePosts} from "../Components/hooks/usePosts";


import PostService from ".././Components/API/PostService";
import Loader from ".././Components/UI/Loader/Loader";
import {useFetching} from "../Components/hooks/useFetching";
import {getPageCount, getPagesArray} from "../Components/utils/pages";
import Pagination from ".././Components/UI/pagination/Pagination";



function Posts() {

    const [posts,setPosts] = useState([])
    const [filter, setFilter] = useState({sort:'',query:''} )
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)





    const [fetchPosts, isPostsLoading, posrError] = useFetching ( async (limit, page)  =>{
        const response = await PostService.getAll(limit, page);
        setPosts(response.data)
        const totalCount  = response.headers['x-total-count']
        setTotalPages( getPageCount(totalCount, limit ));
    })

   // console.log(totalPages)

    useEffect(()=>{
        // console.log('USE EFFECT') // Срабатывает 2 раза, вопрос почему
        fetchPosts(limit, page)

    }, [page])

    const createPost = (newPost) =>{
        setPosts([...posts,newPost])
        setModal(false)
    }




    // Получение пост из дочернего компонента
    const removePost = (post) =>{
        setPosts(posts.filter(p=>p.id !== post.id))
    }

    const  changePage = (page) =>{
        setPage(page)
        fetchPosts(limit, page)
    }



    return (
        <div className="App">

            <RcButton style={{marginTop: 30}}  onClick={()=>setModal(true)}>
                Создать новый пост
            </RcButton>


            <RcModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </RcModal>

            <hr style={{margin: '15px'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>

            {
                posrError && <h1>Произошла ошибка ${posrError} </h1>
            }


            {isPostsLoading

                ? <div style={{
                    display:"flex",
                    justifyContent: "center",
                    marginTop:100,
                }}>   <Loader/>   </div>
                :  <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов'/>

            }

            <Pagination  page={page}
                         changePage={changePage}
                         totalPages={totalPages}/>

        </div>
    );
}

export default Posts;