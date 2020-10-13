import { Action } from '@ngrx/store';

import { NavItem } from '../../../../../models/api/nav/nav-item';
import { NavActionsTypes } from './nav.actions';

export class GetNavSuccessAction implements Action {
    public readonly type: string;

    constructor(public payload: NavItem[]) {
        this.type = NavActionsTypes.GET_NAV_SUCCESS;
    }
}
