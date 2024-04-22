import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore, createAction, createReducer, createSlice } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'

//initalState
const initialState = {
    value: 10
}
const counterSlice = createSlice({
    initialState,
    name: 'counter',
    reducers: {
        //apis
        increment(state) {
            state.value++
        },
        decrement(state) {
            state.value--
        },
        incrementBy(state, action) {
            state.value += action.payload
        }

    }
})

//extract reducers,actions from the slice
const CounterReducer = counterSlice.reducer
const { increment, decrement, incrementBy } = counterSlice.actions

const store = configureStore({
    reducer: {
        counter: CounterReducer
    }
})

///////////////////////////////////////////////////////
const Counter = () => {
    const value = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    const onIncrement = () => {
        dispatch({
            type: increment

        })
    }

    return <>
        <h1>Counter {value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={() => {
            dispatch({ type: decrement })
        }}>-</button>

        <button onClick={() => {
            dispatch({ type: incrementBy, payload: 2 })
        }}>doubleIt</button>
    </>
}

const App = () => <div>
    <Counter />
</div>

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>

)