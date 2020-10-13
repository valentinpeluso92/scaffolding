import { ToggleNavAction } from './toggle-nav.actions';
import { GetNavAction } from './get-nav.actions';
import { GetNavErrorAction } from './get-nav-error.actions';
import { GetNavSuccessAction } from './get-nav-success.actions';
import { ChangeNavItemAction } from './change-nav-item.actions';

export enum NavActionsTypes {
    TOGGLE_NAV = 'TOGGLE_NAV',
    GET_NAV = 'GET_NAV',
    GET_NAV_SUCCESS = 'GET_NAV_SUCCESS',
    GET_NAV_ERROR = 'GET_NAV_ERROR',
    CHANGE_NAV_ITEM = 'CHANGE_NAV_ITEM',
}

export type NavActions = ToggleNavAction | GetNavAction | GetNavErrorAction | GetNavSuccessAction | ChangeNavItemAction;
