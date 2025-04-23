import { useContext } from "react"
import PostsListContext from "../contexts/postsListContext"

export default function PostsList() {

    const { postsList } = useContext(PostsListContext);

    return <>
        {postsList.map(elem => {

        return <div key={elem.id}>
                <h2>{elem.title}</h2>
                <p>{elem.body}</p>
            </div>
        })}
    </>
}