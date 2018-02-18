import { transactions } from './reducers/transactions';
import { createStore, combineReducers } from 'redux';

export const store = createStore(combineReducers(
    {
        transactions
    }
));