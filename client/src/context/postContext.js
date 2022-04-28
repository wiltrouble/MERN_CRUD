import { useState, useContext, createContext, useEffect } from "react";
import {getPostRequest} from '../api/posts';

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

  useEffect(() => {
    getPosts()
  }, [])

  return <postContext.Provider value={{
    posts,
    setPosts,
    getPosts
  }}>
    {children}
  </postContext.Provider>
}