import { transactions } from './reducers/transactions';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import persistState  from 'redux-localstorage';

interface DebugWindow extends Window {
    __REDUX_DEVTOOLS_EXTENSION__: Function;
}

const reducers = combineReducers({
    transactionState: transactions
});

const middleWare = applyMiddleware(thunk);

const enhancer = compose(
    persistState()
);

export const store = createStore(
    reducers,
    compose(
        middleWare,
        (window as DebugWindow).__REDUX_DEVTOOLS_EXTENSION__ && (window as DebugWindow).__REDUX_DEVTOOLS_EXTENSION__()
    ),
    enhancer
);