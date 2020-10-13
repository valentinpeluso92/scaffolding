import { createSelector } from '@ngrx/store';

import { ISalesViewState, ISalesState } from '../states/sales.state';

import { get } from 'lodash';

export const salesSelector = (state: ISalesState) => get(state, 'sales.salesView');

export const tabsSelector = createSelector(
    salesSelector,
    (state: ISalesViewState) => state.tabs
);

export const tabSelectedSelector = createSelector(
    salesSelector,
    (state: ISalesViewState) => state.tabSelected
);

export const isLoadingSelector = createSelector(
    salesSelector,
    (state: ISalesViewState) => state.isLoading
);
