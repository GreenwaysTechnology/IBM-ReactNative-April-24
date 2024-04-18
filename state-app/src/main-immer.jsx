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
            return produce(prveState, draft => {
                draft.house.points += 2
            })
        })
    }

    render() {
        return <div>
            <HouseRatingDisplay {...this.state} onIncrement={this.onIncreasePointsByTwo} />
        </div>
    }
}

const HouseRatingDisplay = props => {
    return <>
        <h1>House Rating Component</h1>
        <h3>House Name : {props.house.name}</h3>
        <h3>Points : {props.house.points}</h3>
        <button onClick={props.onIncrement}>+</button>
    </>
}

const App = () => {
    return <>
        <HouseRating />
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />
);