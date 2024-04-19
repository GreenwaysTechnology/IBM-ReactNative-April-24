import React from 'react'
import ReactDOM from 'react-dom/client'	
import { configureStore } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'
import './index.css'

//reducer
const LikeReducer = (like = 10, action) => {
    //biz
    switch (action.type) {
        case 'review/like':
            return like + 1
        default:
            return like //default state/inital state
    }
}

const DislikeReducer = (dislike = 20, action) => {
    switch (action.type) {
        case 'review/dislike':
            return dislike + 1
        default:
            return dislike //default state/inital state
    }
}

//create Store Object

const store = configureStore({
    reducer: {
        like: LikeReducer,
        dislike: DislikeReducer
    }
})

///////////////////////////////////////////////////////
const Review = () => {

    //hook to get redux state
    const like = useSelector(state => {
        //appstate.reducerName
        return state.like
    })

    const dislike = useSelector(state => {
        //appstate.reducerName
        return state.dislike
    })
    const dispatch = useDispatch()

    return <>
        <h1>Like {like} Dislike {dislike}</h1>
        <button onClick={()=>{
                dispatch({type:'review/like'})
        }}>Like</button>
                <button onClick={()=>{
                dispatch({type:'review/dislike'})
        }}>Dislike</button>
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