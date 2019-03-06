import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';

import { environment } from '../../environments/environment';
import * as navReducer from './nav/reducers/nav.reducer';
import { INavState } from './nav/states/nav.state';

export interface ISharedState {
    nav: INavState;
}

export const reducers: ActionReducerMap<ISharedState> = {
    nav: navReducer.reducer,
};

export const metaReducers: MetaReducer<ISharedState>[] = !environment.production ? [] : [];
