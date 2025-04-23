// posts list
import PostsList from '../components/PostsList';

export default function PostsPage({ listPosts }) {

    return <>
        <h1>Posts List</h1>
        <PostsList postsList={listPosts}/>
    </>
}