import ReactDOM from 'react-dom/client'
import './index.css'
import { useEffect, useState } from 'react'
import { produce } from 'immer'


const Posts = () => {
    const [post, setPost] = useState({
        posts: [], //data
        error: null,
        isLoading: false
    })
    async function fetchPosts() {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        try {
            const response = await fetch(url)
            const posts = await response.json()
            console.log(posts)
            setPost(previousState => {
                return produce(previousState, draft => {
                    draft.posts = posts
                    draft.isLoading = true
                    draft.error = previousState.error
                })
            })
        }
        catch (err) {
            setPost(previousState => {
                return produce(previousState, draft => {
                    draft.error = err
                })
            })
        }
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    if (post.error) {
        return <div style={{ marginLeft: 50 }}>
            <h1>Error : {post.error.message}</h1>
        </div>
    } else if (!post.isLoading) {
        return <h1 style={{ textAlign: 'center' }}>🛴</h1>
    } else {
        return <div style={{ marginLeft: 50 }}>
            <h1>Posts</h1>
            <hr />
            <ul>
                {post.posts.map(post => {
                    return <li>{post.title}</li>
                })}
            </ul>
        </div>

    }
}

const App = () => {
    return <>
        <Posts />
    </>
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
