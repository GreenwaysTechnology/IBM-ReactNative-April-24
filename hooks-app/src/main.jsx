import ReactDOM from 'react-dom/client'
import './index.css'
import { useState } from 'react'


const Review = () => {
    //state declaration
    const [like, setLike] = useState(0)
    const [dislike, setDislike] = useState(0)

    return <>
        <h1>Review App</h1>
        <h3>Like {like} Dislike {dislike}</h3>
        <button onClick={() => {
            setLike(like + 1)
        }}>Like</button>
        <button onClick={() => {
            setDislike(dislike + 1)
        }}>Dislike</button>

    </>

}


const App = () => {
    return <>
        <Review />
    </>
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
