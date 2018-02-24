import { TransactionState } from './transactions';
import { CategoryState } from './categories';

export interface AppState {
    transactionState: TransactionState;
    categoryState: CategoryState;
}