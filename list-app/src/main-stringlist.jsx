import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// const List = props => {

//   return <ul>
//     {
//       props.names.map(name => {
//         return <li>{name}</li>
//       })
//     }
//   </ul>
// }
const List = ({ names }) => <ul>
  {
    names.map(name => <li>{name}</li>)
  }
</ul>


const App = () => {
  const names = ['Subramanian', 'Murugan', 'Geetha', 'DhivyaSree', 'Shirisha']
  return <div className="container">
    <List names={names} />
  </div>
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
