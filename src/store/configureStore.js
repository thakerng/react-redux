import {createStore} from 'redux';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux';

let logger = createLogger();

export default function configureStore(){
    let enhancers = applyMiddleware(logger,thunk);
    return createStore(rootReducer,enhancers);
}