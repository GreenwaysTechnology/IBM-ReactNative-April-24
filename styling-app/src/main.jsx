import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//style object 
const styles = {
  heading: {
    color: 'red',
    fontStyle:'italic',
    fontFamily:'Charcoal',
    border:'thick solid #0000FF',
    borderRadius:'25px'
  }
}

const App = () => {
  return <div className='container'>
    <h1 style={styles.heading}>App</h1>
  </div>
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
