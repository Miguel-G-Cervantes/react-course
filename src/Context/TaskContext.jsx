import { useEffect } from "react";
import { createContext,useState } from "react";
export const TaskContext = createContext();
export function TaskContextPrivider(props){

    useEffect(()=>{//initialize posts and comments

    },[]);

    const [posts,setPost]= useState([]);
    const [comments,setComment]=useState([])
    function createPost(post){
        setPost(...posts,{
            id: post.id,
            title:post.title,
            description:post.description,
            category:post.category,
            urlImage:post.urlImage
        })
    }
    function deletePost(post){
        setPost(posts.filter(n=> n.id!=post.id))
    }
    function createComment(){

    }
    

    function editPost(post){
        deletePost(post)
        createPost(post)
    }
    return(
        <>
            <TaskContext.Provider value={{
                post,
                comment,
                createPost,
                createComment,
                editPost
            }}>
                {props.chlidren}
            </TaskContext.Provider>
        </>
    );
}

