import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'
import './index.css'

//reducer
const ReviewReducer = (like = 1, action) => {
    //biz
    switch (action.type) {
        case 'review/like':
            return like + action.payload
        default:
            return like //default state/inital state
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

    //hook to get redux state
    const like = useSelector(state => {
        //appstate.reducerName
        return state.review
    })
    const dispatch = useDispatch()

    const onLike = () => {
        //send action via dispatcher
        dispatch({
            type: 'review/like',
            payload:2
        })
    }

    return <>
        <h1>Like {like}</h1>
        <button onClick={onLike}>+</button>
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
