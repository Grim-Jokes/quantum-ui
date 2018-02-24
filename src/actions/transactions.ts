import { Action, Dispatch } from 'redux';
import { Transaction } from 'models/transaction';

export const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS';
export const LOAD_TRANSACTIONS = 'LOAD_TRANSACTIONS';

export interface SaveTransactions extends Action {
    payload: Transaction[];
}

export function getTransactions(categoryId?: number | null) {
    return (dispatch: Dispatch<Transaction>, getState: Function) => {
        dispatch({ type: LOAD_TRANSACTIONS });
        fetch('http://192.168.33.10:8000/api/v1/transactions')
            .then(
                async (response: Response) => {
                    const data: Transaction[] = await response.json();

                    dispatch(saveTransactions(data));
                }
            );

    };
}

export function saveTransactions(transactions?: Transaction[]) {
    return {
        type: RECEIVE_TRANSACTIONS,
        payload: transactions
    };
}