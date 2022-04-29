import { useState, useContext, createContext, useEffect } from "react";
import {getPostRequest, createPostRequest, deletePostRequest} from '../api/posts';

const postContext = createContext()

export const usePosts = () => {
  const context = useContext(postContext)
  return context;
}

export const PostProvided = ({children}) => {

  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    const res = await getPostRequest()
    setPosts(res.data)
  }

  const createPost = async post => {
    const res = await createPostRequest(post)
    setPosts([...posts, res.data])
  }

  const deletePost = async id => {
    await deletePostRequest(id)
    setPosts(posts.filter((post) => post._id !== id))
  }

  useEffect(() => {
    getPosts()
  }, [])

  return <postContext.Provider value={{
    posts,
    setPosts,
    getPosts,
    createPost,
    deletePost
  }}>
    {children}
  </postContext.Provider>
}