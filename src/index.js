import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import categoryReducer from './reducers/category-reducer';
import { Provider } from 'react-redux';

const store = createStore(categoryReducer);

ReactDOM.render(
    <HashRouter>
        <Provider>
            <App  store={store}/>
        </Provider>
    </HashRouter>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
