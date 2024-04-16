import ReactDOM from 'react-dom/client';

//Here we create Heading component
const Heading = <h1>Hello How are you!</h1>

const rootElement =  document.getElementById('root')
const root = ReactDOM.createRoot(rootElement);
root.render(Heading)