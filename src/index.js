import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss';

//! Redux
//? $ npm i -s redux react-redux @reduxjs/toolkit @redux-devtools/extension pour installer redux
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';


//? Le reducer permet d'envoyer les données dans le store
const store = configureStore({ 
    reducer: rootReducer,
    devTools: true //? Permet d'activer l'extension Redux DevTools
 });



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store} >
        <App />
    </Provider>
    );

