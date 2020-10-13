import { ActionReducerMap } from '@ngrx/store';

import { IProductsViewState, productsViewInitialState, IProductsState } from '../states/products.state';
import { ProductsActions, ProductsActionsTypes } from '../actions/products.actions';

export const productsReducer: ActionReducerMap<IProductsState> = {
    productsView: productsViewReducer,
};

export function productsViewReducer(state = productsViewInitialState, action: ProductsActions): IProductsViewState {
    switch (action.type) {
        case ProductsActionsTypes.GET_PRODUCTS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                products: action.payload,
            };
        }
        case ProductsActionsTypes.GET_PRODUCTS_ERROR: {
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        }
        default: {
            return state;
        }
    }
}
