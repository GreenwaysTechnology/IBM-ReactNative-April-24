import { Button, StyleSheet, Text, View } from "react-native"
import { configureStore, createSlice } from '@reduxjs/toolkit'
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
const CounterReducer = counterSlice.reducer

const { increment, decrement, incrementBy } = counterSlice.actions

const store = configureStore({
    reducer: {
        counter: CounterReducer
    }
})
const Counter = () => {
    const value = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    const onIncrement = () => {
        dispatch({
            type: 'counter/increment'
        })
    }

    return <View style={styles.container}>
        <Text>Counter {value}</Text>
        <Button title="+" onPress={onIncrement} />
        <Button title="-" onPress={() => {
            dispatch({ type: 'counter/decrement' })
        }} />
        <Button title="doubleIt" onPress={() => {
            dispatch({ type: 'counter/incrementBy', payload: 2 })
        }} />

    </View>
}



//component 
function App() {
    return <Provider store={store}>
        <View style={styles.container}>
            <Counter />
        </View>
    </Provider>

}
//declare stylesheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'yellow',
        alignItems:'center',            
        backgroundColor: '#f4e1d2',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10
    }
})

export default App