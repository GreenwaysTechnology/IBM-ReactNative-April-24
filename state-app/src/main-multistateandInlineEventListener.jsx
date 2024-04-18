import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

class Review extends React.Component {

    state = {
        like: 0,
        dislike: 10
    }

    onLike = () => {
        this.setState(prevState => {
            return { ...prevState, like: prevState.like + 1 }
        })
    }

    render() {
        const { like, dislike } = this.state
        return <div>
            <h1>Review Comoponent</h1>
            <h2>Like {like} Dislike {dislike}</h2>
            <button onClick={this.onLike} style={{ backgroundColor: 'pink', marginRight: 10 }}>Like</button>
            {/* inline listener */}
            <button onClick={() => {
                this.setState(prevState => {
                    return { ...prevState, dislike: prevState.dislike + 1 }
                })
            }} style={{ backgroundColor: 'pink' }}>Dislike</button>

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
