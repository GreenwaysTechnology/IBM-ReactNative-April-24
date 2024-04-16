import ReactDOM from 'react-dom/client';

const Heading = () => <div>
    <h1>Hello</h1>
    <p>react is delcarative lib</p>
</div>
const root = ReactDOM.createRoot(document.getElementById('root'))
// 
root.render(<Heading />)