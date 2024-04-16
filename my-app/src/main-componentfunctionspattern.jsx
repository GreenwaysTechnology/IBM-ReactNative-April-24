import ReactDOM from 'react-dom/client';

// function Heading() {
//     return <h1>Hello</h1>
// }
// const Heading = () => {
//     return <h1>Hello</h1>
// }
const Heading = () => <h1>Hello</h1>

const root = ReactDOM.createRoot(document.getElementById('root'))
//imperative way of calling function : js syntax
//root.render(Heading())
root.render(<Heading></Heading>)