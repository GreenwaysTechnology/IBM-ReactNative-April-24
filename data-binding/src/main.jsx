import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// const AlertButton = props => {

//     return <>
//         <button>{props.children}</button>
//     </>
// }
const AlertButton = ({ children }) => {

    return <>
        <button>{children}</button>
    </>
}

const Label = props => {
    return <>
        {props.text}
    </>
}

const App = () => {
    return <>
        {/* <AlertButton /> */}
        <AlertButton>
            PlayMovie
        </AlertButton>
        <AlertButton>
            {/* component as prop */}
            <Label text="UploadImage" />
        </AlertButton>
    </>

}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
