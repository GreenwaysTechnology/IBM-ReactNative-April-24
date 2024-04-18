import ReactDOM from 'react-dom/client'
import './index.css'
import { useState } from 'react'


const Review = () => {
  //state declaration
  const [like, setLike] = useState(0)

  // const onLike = () => {
  //   //logic
  //   // setLike((prevState) => {
  //   //   return prevState + 1
  //   // })
  //   //short cut
  //   // setLike(prevState => prevState + 1)
  //   setLike(like + 1)

  // }

  return <>
    <h1>Review App</h1>
    <h3>Like: {like}</h3>
    {/* <button onClick={onLike}>Like</button> */}
    <button onClick={() => {
      setLike(like + 1)
    }}>Like</button>

  </>

}


const App = () => {
  return <>
    <Review />
  </>
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
