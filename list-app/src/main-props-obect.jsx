import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { PRODUCTS } from './mock-data/products'

const Products = props => {
    const { products } = props
    return <div>
        {
            products.map(product => {
                return <div  className="card" key={product.id}>
                    <img src={product.images[0]} height={300} width={300} />
                    <h4>${product.price}</h4>
                    <h4>{product.title}</h4>
                    <h4>{product.category.name}</h4>    

                </div>
            })
        }
    </div>
}


const App = () => {
    return <div className="container">
        <Products products={PRODUCTS} />
    </div>
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
