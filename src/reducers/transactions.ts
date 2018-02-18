import { Action } from 'redux';

class Transaction {

}

interface TransactionState {
    transactions: Transaction[];
}

const initialState: TransactionState = {
    transactions: []
};

export function transactions(state: TransactionState = initialState, action: Action) {
    switch (action.type) {
        default:
            return initialState;
    }
}