import { Action } from '@ngrx/store';
import { NavActionsTypes } from './nav.actions';
import { NavItem } from '../../../../../models/api/nav/nav-item';

export class ChangeNavItemAction implements Action {
    public readonly type: string;

    constructor(public payload: NavItem) {
        this.type = NavActionsTypes.CHANGE_NAV_ITEM;
    }
}
