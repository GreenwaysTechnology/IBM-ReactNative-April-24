import ReactDOM from 'react-dom/client'
import React, { useState } from 'react'
import './index.css'

const Review = () => {
  const [like, setLike] = useState(0)

  return <>
    <h1>Like {like}</h1>
    <button onClick={() => {
      setLike(like + 1)
    }}>+</button>
  </>
}


const App = () => {
  return <>
    <Review />
  </>
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
