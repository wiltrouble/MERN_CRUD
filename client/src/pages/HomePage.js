import { useContext } from "react";
import { context, usePosts } from "../context/postContext";
import {Link} from 'react-router-dom';

export const HomePage = () => {
  const {setPosts} = usePosts();
  
  return (
    <div>
      HomePage

      <Link to="/new" className="text-blue-400">
        Go to new
      </Link>
      <button className="bg-red-500" onClick={() => setPosts([1,2,3])}>add</button>
    </div>
  );
};
