import axios from "axios";
import { useEffect, useState } from "react";

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
    <>
      <PostsPage listPosts={postsList}/>
    </>
  )
}

export default App
