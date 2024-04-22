import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore, createAction, createAsyncThunk, createReducer, createSlice } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'
import logger from 'redux-logger'
import "./index.css"

//api calls - createAsyncThunk

//initalState
const initialState = {
    enities: [],
    loading: false
}
//posts/getPosts/pending or /posts/getPosts/fullfiled

const getPosts = createAsyncThunk('posts/getPosts', async (thunkAPI) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()
    return posts
})

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getPosts.pending, (state, action) => {
            state.loading = true
        }).addCase(getPosts.fulfilled, (state, { payload }) => {
            state.loading = false
            state.enities = payload
        }).addCase(getPosts.rejected, (state, action) => {
            state.loading = false
        })
    }
})
const postReducer = postSlice.reducer


const store = configureStore({
    reducer: {
        posts: postReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

const Post = () => {
    const dispatch = useDispatch()
    const { enities, loading } = useSelector((state) => state.posts)

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    if (loading) return <p>Loading...</p>

    return (
        <div>
            <h2>Blog Posts</h2>
            {enities.map((post) => (
                <p key={post.id}>{post.title}</p>
            ))}
        </div>
    )
}


const App = () => <div>
     <Post></Post>
</div>

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>

)