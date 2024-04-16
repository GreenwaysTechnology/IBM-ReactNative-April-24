import ReactDOM from 'react-dom/client';
import { Greeter } from './welcome/Greeter';

const App = () =><>
    <Greeter/>
</>


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)