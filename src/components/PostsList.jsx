export default function PostsList({ postsList }) {

    return <>
        {postsList.map(elem => {

        return <div key={elem.id}>
                <h2>{elem.title}</h2>
                <p>{elem.body}</p>
            </div>
        })}
    </>
}