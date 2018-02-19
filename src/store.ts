import { transactions } from './reducers/transactions';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

interface DebugWindow extends Window {
    __REDUX_DEVTOOLS_EXTENSION__: Function;
}

export const store = createStore(
    combineReducers(
        {
            transactions
        }
    ),
    applyMiddleware(thunk),
    (window as DebugWindow).__REDUX_DEVTOOLS_EXTENSION__ && (window as DebugWindow).__REDUX_DEVTOOLS_EXTENSION__()
);