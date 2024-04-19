import ReactDOM from 'react-dom/client'
import './index.css'
import { useEffect, useState } from 'react'
import { produce } from 'immer'


const Review = () => {
    //state declaration
    const [like, setLike] = useState(0)
    const [initialRender, setInitalRender] = useState(true);

    //async operation:Life Cycle Method
    useEffect(() => {
        if (initialRender) {
            //componentDidMount
            setInitalRender(false)
            console.log('mount')

        } else {
            //componentDidUpdate
            console.log('update')
        }
    }, [like])


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
