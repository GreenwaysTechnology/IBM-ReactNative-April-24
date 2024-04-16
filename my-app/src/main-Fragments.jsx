// import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';

// const Heading = () => <React.Fragment>
//     <h1>Hello</h1>
//     <p>react is delcarative lib</p>
// </React.Fragment>

// const Heading = () => <Fragment>
//     <h1>Hello</h1>
//     <p>react is delcarative lib</p>
// </Fragment>
const Heading = () => <>
    <h1>Hello</h1>
    <p>react is delcarative lib</p>
</>
const root = ReactDOM.createRoot(document.getElementById('root'))
// 
root.render(<Heading />)