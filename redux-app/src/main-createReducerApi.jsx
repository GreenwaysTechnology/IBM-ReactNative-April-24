import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore, createReducer } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'


//create Store Object
const initalState = {
    value: 10,
    dislikevalue:10
}
const ReviewReducer = createReducer(initalState, builder => {
    builder.addCase('review/like', (state, action) => {
        //immer js code
        state.value++
    }).addCase('review/dislike', (state, action) => {
        state.dislikevalue++
    }).addDefaultCase((state, action) => { })
})

const store = configureStore({
    reducer: {
        review: ReviewReducer
    }
})

///////////////////////////////////////////////////////
const Review = () => {
    const likeValue = useSelector(state => state.review.value)
    const dislikeValue = useSelector(state => state.review.dislikevalue)
    const dispatch = useDispatch()
    const onLike = () => {
        dispatch({
            type: 'review/like'
            
        })
    }

    return <>
        <h1>Like {likeValue} Dislike: {dislikeValue}</h1>
        <button onClick={onLike}>+</button>
        <button onClick={() => {
            dispatch({ type: 'review/dislike' })
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