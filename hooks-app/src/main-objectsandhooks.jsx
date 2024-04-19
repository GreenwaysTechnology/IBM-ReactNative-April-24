import ReactDOM from 'react-dom/client'
import './index.css'
import { useState } from 'react'
import { produce } from 'immer'


const Review = () => {
    //state declaration
    const [review, setReview] = useState({ like: 0, dislike: 0 })
    return <>
        <h1>Review App</h1>
        <h3>Like {review.like} Dislike {review.dislike}</h3>
        <button onClick={() => {
            setReview(prevState => {
                return produce(prevState, (draft) => {
                    draft.like += 1
                })
            })
        }}>Like</button>
        <button onClick={() => {
            setReview(prevState => {
                return produce(prevState, (draft) => {
                    draft.dislike += 1
                })
            })
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
