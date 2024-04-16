import ReactDOM from 'react-dom/client';

//component composition

const Hello = () => <h1>Hello</h1>
const Hai = () => <h1>Hai</h1>
const Welcome = () => <h1>Welcome</h1>

const Greeter = () => <div>
    <Hello />
    <Hai />
    <Welcome />
</div>


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Greeter />)