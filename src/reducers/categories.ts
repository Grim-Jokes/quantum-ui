import { CategoryState } from '../states/categories';
import * as Actions from '../actions/categories';

const initialState: CategoryState = {
    categories: []
};

export function categoriesReducer(state: CategoryState = initialState, action: { type: string; payload: Object }) {
    switch (action.type) {
        case Actions.RECEIVE_CATEGORIES:
            return { ...state, ...{ categories: action.payload } };

        default:
            return state;
    }
}