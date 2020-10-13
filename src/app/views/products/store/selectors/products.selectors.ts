import { createSelector } from '@ngrx/store';

import { IProductsViewState, IProductsState } from '../states/products.state';

import { get } from 'lodash';

export const productsViewSelector = (state: IProductsState) => get(state, 'products.productsView');

export const productsSelector = createSelector(
    productsViewSelector,
    (state: IProductsViewState) => state.products
);

export const isLoadingSelector = createSelector(
    productsViewSelector,
    (state: IProductsViewState) => state.isLoading
);
