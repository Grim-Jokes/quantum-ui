import { transactions } from './reducers/transactions';
import { createStore, combineReducers } from 'redux';

interface DebugWindow extends Window {
    __REDUX_DEVTOOLS_EXTENSION__: Function;
}

export const store = createStore(
    combineReducers(
        {
            transactions
        }
    ),
    (window as DebugWindow).__REDUX_DEVTOOLS_EXTENSION__ && (window as DebugWindow).__REDUX_DEVTOOLS_EXTENSION__()
);