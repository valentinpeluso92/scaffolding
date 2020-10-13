import { createSelector } from '@ngrx/store';

import { INavState, IState } from '../states/nav.state';

import { get } from 'lodash';

export const navSelector = (state: IState) => get(state, 'nav.nav');

export const isOpenNavSelector = createSelector(
    navSelector,
    (state: INavState) => state.isOpen
);

export const navItemsSelector = createSelector(
    navSelector,
    (state: INavState) => state.items
);

export const navItemSelectedSelector = createSelector(
    navSelector,
    (state: INavState) => state.selected
);

export const isLoadingSelector = createSelector(
    navSelector,
    (state: INavState) => state.isLoading
);
