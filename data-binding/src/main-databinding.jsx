import React from 'react'
import ReactDOM from 'react-dom/client'

const User = () => {
  //data
  const userName = 'Subramanian Murugan'
  const mail = 'sasubramanian_md@hotmail.com'
  const status = true
  const id = 1
  const imageSrc = 'https://i.imgur.com/7vQD0fPs.jpg'

  return <div>
    <img src={imageSrc} height={50} width={50} />
    <h1>Id {id}</h1>
    <p>Name {userName}</p>
    <p>Mail {mail}</p>
    <h3>Status {status ? 'Available' : 'Not Available'}</h3>
  </div>
}

const VideoPlayer = () => {
  const height = 200
  const width = 200
  const controls = true
  const src = "movie.mp4"
  const type = "video/mp4"

  return <video width={width} height={height} controls={controls}>
    <source src={src} type={type}/>
  </video>
}


const App = () => <>
  <User />
  <VideoPlayer />
</>

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
