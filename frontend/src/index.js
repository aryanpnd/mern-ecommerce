import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import "./styles/miscellaneous.css"
import './styles/animations.css'

import { BrowserRouter } from 'react-router-dom';
import { ProductContextProvider } from './context/productContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ProductContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ProductContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

