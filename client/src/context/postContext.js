import { useState, useContext, createContext, useEffect } from "react";
import {getPostRequest, createPostRequest} from '../api/posts';

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

  useEffect(() => {
    getPosts()
  }, [])

  return <postContext.Provider value={{
    posts,
    setPosts,
    getPosts,
    createPost
  }}>
    {children}
  </postContext.Provider>
}