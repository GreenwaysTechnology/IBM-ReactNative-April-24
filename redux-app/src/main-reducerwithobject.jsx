import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'

//reducer
const ReviewReducer = (state = { like: 0 }, action) => {
    //biz
    switch (action.type) {
        case 'review/like':
            return { ...state, like: state.like + 1 }
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

    //hook to get redux state
    const like = useSelector(state => {
        //appstate.reducerName
        return state.review.like
    })
    const dispatch = useDispatch()

    const onLike = () => {
        //send action via dispatcher
        dispatch({
            type: 'review/like'
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