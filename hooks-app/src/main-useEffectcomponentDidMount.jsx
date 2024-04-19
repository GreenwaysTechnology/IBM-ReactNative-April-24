import ReactDOM from 'react-dom/client'
import './index.css'
import { useEffect, useState } from 'react'
import { produce } from 'immer'


const Review = () => {
    //state declaration
    const [like, setLike] = useState(0)

    //async operation:Life Cycle Method
    //componentDidMount
    useEffect(() => {
        //write async operation
        setTimeout(() => {
            setLike(like + 1)
        }, 5000)
    }, [])


    return <>
        <h1>Review App</h1>
        <h4>Like {like}</h4>
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
