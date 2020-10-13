import { get } from 'lodash';

import { IProductState, IProductViewState } from '../states/product.state';
import { createSelector } from '@ngrx/store';

export const productViewSelector = (state: IProductState) => get(state, 'newProduct.productView');

export const productFormSelector = createSelector(
    productViewSelector,
    (state: IProductViewState) => state.form
);

export const isLoadingSelector = createSelector(
    productViewSelector,
    (state: IProductViewState) => state.isLoading
);
