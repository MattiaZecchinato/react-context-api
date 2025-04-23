import axios from "axios";
import { useEffect, useState } from "react";

// contexts
import PostsListContext from "./contexts/postsListContext";

//pages
import PostsPage from './pages/PostsPage';

function App() {

  const [postsList, setPostsList] = useState([]);

  const uri = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {

    axios.get(uri)
    .then(res => setPostsList(res.data))
    .catch(err => console.error(err))
  }, [])

  return (
    <PostsListContext.Provider value={{postsList}}>
      <PostsPage />
    </PostsListContext.Provider>
  )
}

export default App
