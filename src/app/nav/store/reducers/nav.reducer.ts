import { INavState, navInitialState, IState } from '../states/nav.state';

import { NavActions, NavActionsTypes } from '../actions/nav.actions';

import { find } from 'lodash';
import { ActionReducerMap } from '@ngrx/store';

export const reducer: ActionReducerMap<IState> = {
    nav: navReducer,
};

export function navReducer(state = navInitialState, action: NavActions): INavState {
    switch (action.type) {
        case NavActionsTypes.TOGGLE_NAV:
            return {
                ...state,
                isOpen: action.payload,
            };
        case NavActionsTypes.GET_NAV_SUCCESS:
            return {
                ...state,
                isLoading: false,
                items: action.payload,
                selected: find(action.payload, ['link', window.location.pathname]),
            };
        case NavActionsTypes.CHANGE_NAV_ITEM:
            return {
                ...state,
                selected: action.payload,
                isOpen: false,
            };
        case NavActionsTypes.GET_NAV_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default: {
            return state;
        }
    }
}
