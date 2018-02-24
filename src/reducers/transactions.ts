import * as Actions from 'actions/transactions';
import { TransactionState } from 'states//transactions';

const initialState: TransactionState = {
    transactions: []
};

export function transactions(state: TransactionState = initialState, action: {type: string, payload: {}}) {
    switch (action.type) {
        case Actions.RECEIVE_TRANSACTIONS:
            return {...state, ...{transactions: action.payload }};
        default:
            return state;
    }
}