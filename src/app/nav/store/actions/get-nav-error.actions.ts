import { Action } from '@ngrx/store';

import { NavActionsTypes } from './nav.actions';

export class GetNavErrorAction implements Action {
    public readonly type: string;

    constructor(public payload: any) {
        this.type = NavActionsTypes.GET_NAV_ERROR;
    }
}
