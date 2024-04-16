import ReactDOM from 'react-dom/client';

//create element
const Heading = <h1>Hello How are you!</h1>


const rootElement =  document.getElementById('root')
const root = ReactDOM.createRoot(rootElement);
root.render(Heading)