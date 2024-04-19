import ReactDOM from 'react-dom/client'
import './index.css'
import { useEffect, useState } from 'react'
import { produce } from 'immer'


const MyInput = () => {
    const [text, setText] = useState('James')

    const handleChange = (evt) => {
        setText(evt.target.value)
    }
    return <>
        <h2>Your Name: {text}</h2>
        <input value={text} onChange={handleChange} />
    </>
}


const App = () => {
    return <>
        <MyInput />
    </>
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
