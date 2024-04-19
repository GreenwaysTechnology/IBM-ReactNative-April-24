import React from 'react'
import ReactDOM from 'react-dom/client'

const VideoPlayer = ({ width, height, controls, src, type }) => <video width={width} height={height} controls={controls}>
    <source src={src} type={type} />
</video>

//Default Props
VideoPlayer.defaultProps = {
    width: 100,
    height: 100,
    controls: true,
    src: "",
    type: "mp4"
}

const App = () => {
    const height = 200
    const width = 200
    const controls = true
    const src = "movie.mp4"
    const type = "video/mp4"

    return <>
        <div>
            <VideoPlayer height={height} width={width} controls={controls} src={src} type={type} />
        </div>
        <div>
            <VideoPlayer height={300} width={400} controls={true} src={src} type={type} />
        </div>
        <div>
            <VideoPlayer height={300} width={400} controls={true} src={src} type={type} />
        </div>
        <div>
            <VideoPlayer />
        </div>
        <div>
            <VideoPlayer width={500} />
        </div>
    </>

}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
