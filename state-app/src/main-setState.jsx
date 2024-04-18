import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

class Review extends React.Component {

    state = {
        like: 0
    }

    onLike = () => {
        this.setState(function (prevState, props) {
            //write immutable logic
            // return {
            //     like: prevState.like + 1
            // }
            //return Object.assign({}, prevState, { like: prevState.like + 1 })
            return { ...prevState, like: prevState.like + 1 }
        })
    }

    render() {
        console.log('inside render', this.state.like)
        const { like } = this.state
        return <div>
            <h1>Review Comoponent</h1>
            <h2>Like {like}</h2>
            <button onClick={this.onLike} style={{ backgroundColor: 'pink' }}>+</button>
        </div>
    }
}


const App = () => {
    return <div>
        <Review />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
