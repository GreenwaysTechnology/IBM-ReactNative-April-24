import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { produce } from 'immer';

class Posts extends React.Component {

    state = {
        posts: [],
        error: null,
        isLoading: false
    }
    async componentDidMount() {
        const url = `https://jsonplaceholder.typicode.com/posts`
        try {
            const response = await fetch(url)
            const posts = await response.json()
            this.setState(prviousState => {
                console.log('prevState', prviousState)
                return produce(prviousState, (draft) => {
                    console.log('draft ',draft)
                    draft.posts = posts
                    draft.isLoading = true
                    draft.error = prviousState.error
                })
            })
        }
        catch (err) {
            this.setState(prviousState => {
                return produce(prviousState, (draft) => {
                    draft.error = err
                })
            })
        }
    }
    render() {
        const { posts, error, isLoading } = this.state
        if (error) {
            return <div>
                <h1>{error.message}</h1>
            </div>
        } else if (!isLoading) {
            return <h1>Loading...</h1>
        } else {
            return <div>
                <h1>Posts</h1>
                <hr />
                <ul>
                    {posts.map(post => {
                        return <li>{post.title}</li>
                    })}
                </ul>
            </div>
        }

    }


}



const App = () => {
    return <>
        <Posts />
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />
);