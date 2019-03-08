import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../environments/environment';
import * as navReducer from './nav/reducers/nav.reducer';
import { ISharedState } from './shared.state';

export const reducers: ActionReducerMap<ISharedState> = {
    nav: navReducer.reducer,
};

export const metaReducers: Array<MetaReducer<ISharedState>> = !environment.production ? [] : [];
