import { useContext } from "react"
import PostsListContext from "../contexts/postsListContext"
import PostCard from "./PostCard";

export default function PostsList() {

    const { postsList } = useContext(PostsListContext);

    return <>
        {postsList.map(elem => <PostCard key={elem.id} body={elem.body} title={elem.title} />)}
    </>
}