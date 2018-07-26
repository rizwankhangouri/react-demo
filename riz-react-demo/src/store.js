import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
//Add Enhancers
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();   

export const store = createStore(
    reducers,
    applyMiddleware( ),
    enhancer
);

