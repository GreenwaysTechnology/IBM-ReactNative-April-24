import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { produce } from 'immer'

//action constant
const like = 'review/like';
const dislike = 'review/dislike'

//reducer
const ReviewReducer = (state = { like: 0, dislike: 0 }, action) => {
    //biz
    switch (action.type) {
        case like:
            return produce(state, (draft) => {
                draft.like += 1
            })
        case dislike:
            return produce(state, (draft) => {
                draft.dislike += 1
            })
        default:
            return state //default state/inital state
    }
}

//create Store Object

const store = configureStore({
    reducer: {
        review: ReviewReducer
    }
})

///////////////////////////////////////////////////////
const Review = () => {
    const likeValue = useSelector(state => state.review.like)
    const dislikeValue = useSelector(state => state.review.dislike)
    const dispatch = useDispatch()
    const onLike = () => {
        dispatch({
            type: like
        })
    }

    return <>
        <h1>Like {likeValue} Dislike: {dislikeValue}</h1>
        <button onClick={onLike}>+</button>
        <button onClick={() => {
            dispatch({ type: dislike })
        }}>+</button>
    </>
}

const App = () => <div>
    <Review />
</div>

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>

)