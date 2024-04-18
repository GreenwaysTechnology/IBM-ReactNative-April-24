import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { produce } from 'immer';

class Counter extends React.Component {

    state = {
        value: 0
    }
    constructor() {
        super()
        console.log('Constructor is called')
    }


    render() {
        console.log('render is called')
        return <div>
            <h1>{this.state.value}</h1>
            <button onClick={() => {
                this.setState(previousState => produce(previousState, (draft) => {
                    draft.value += 1
                }))
            }}>+</button>
        </div>
    }
    componentDidMount() {
        console.log('componentDidMount')
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')

    }
}



const App = () => {
    return <>
        <Counter />
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />
);