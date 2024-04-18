import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { produce } from 'immer';

class HouseRating extends React.Component {
    state = {
        house: {
            name: 'RavenClaw',
            points: 10
        }
    }
    onIncreasePointsByTwo = () => {
        this.setState((prveState) => {
            //using immutable syntax
            // return {
            //     ...prveState,  //level -0 copy
            //      house: {
            //         ...prveState.house, // level-1 copy : copy all properties within house 
            //         points: prveState.house.points+ 2
            //      }
            // }
            //using immer js 
            return produce(prveState, draft => {
                draft.house.points += 2
            })
        })
    }

    render() {
        return <div>
            <h1>House Rating Component</h1>
            <h3>House Name : {this.state.house.name}</h3>
            <h3>Points : {this.state.house.points}</h3>
            <button onClick={this.onIncreasePointsByTwo}>+</button>
        </div>
    }
}

const App = () => {
    return <>
        <HouseRating />
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />
);