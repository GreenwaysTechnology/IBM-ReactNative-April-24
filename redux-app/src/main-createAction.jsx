import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore, createAction, createReducer } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'

//action creators
const increment = createAction('counter/increment')
const decrement = createAction('counter/decrement')
const incrementBy = createAction('counter/incrementBy')

const initalState = {
    value: 1
}
const CounterReducer = createReducer(initalState, builder => {
    builder.addCase(increment, (state, action) => {
        //immer js code
        state.value++
    }).addCase(decrement, (state, action) => {
        state.value--
    }).addCase(incrementBy, (state, action) => {
        state.value += action.payload
    }).addDefaultCase((state, action) => { })
})

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