import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//state
class Review extends React.Component {

  //declare state
  state = {
    like: 0
  }

  render() {
    const { like } = this.state
    return <div>
      <h1>Review Comoponent</h1>
      {/* <h2>Like {this.state.like}</h2> */}
      <h2>Like {like}</h2>
      <button style={{ backgroundColor: 'pink' }}>+</button>
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
