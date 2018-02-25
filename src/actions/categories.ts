import { Dispatch } from 'redux';
import { Category } from 'models/category';

export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
function requestCategories() {
    return {
        type: REQUEST_CATEGORIES
    };
}

export function fetchCategories() {
    return (dispatch: Dispatch<void>) => {
        dispatch(requestCategories());

        fetch('http://192.168.33.10:8000/api/v1/categories')
            .then(
                async (response: Response) => {
                    const data: Category[] = await response.json();

                    dispatch(receiveCategories(data));
                }
            );
    };
}

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
function receiveCategories(categories: Category[]) {
    return {
        type: RECEIVE_CATEGORIES,
        payload: categories
    };
}