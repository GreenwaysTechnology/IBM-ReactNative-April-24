import ReactDOM from 'react-dom/client'
import React, { useState } from 'react'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'


//biz logic: Reducer

const ReviewReducer = (state = 2, action) => {
    switch (action.type) {
        case 'review/like':
            return state + 1
        case 'review/dislike':
            return state + 1
        default:
            return state //default state or initaliState
    }

}

const store = configureStore({
    reducer: {
        review: ReviewReducer
    }
})

const Review = props => {
    const value = useSelector(state => {
        //appState.reducerName
        return state.review
    })
    const dispatch = useDispatch()

    const onIncrement = () => {
        const incrementAction = {
            type: 'review/like'
        }
        dispatch(incrementAction)

    }

    return <>
        <h1>Value {value}</h1>
        <button onClick={onIncrement}>+</button>
    </>
}


const App = () => {
    return <>
        <Review />
    </>
}
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    </Provider>
)
