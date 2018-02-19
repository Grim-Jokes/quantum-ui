import { Action, Dispatch } from 'redux';
import { Transaction } from 'models/transaction';

export const SAVE_TRANSACTIONS = 'SAVE_TRANSACTIONS';

export interface SaveTransactions extends Action {
    payload: Transaction[];
}

export function getTransactions(categoryId?: number | null) {
    return (dispatch: Dispatch<Transaction>, getState: Function) => {
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
        type: SAVE_TRANSACTIONS,
        payload: transactions
    };
}