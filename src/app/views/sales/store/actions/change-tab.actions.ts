import { Action } from '@ngrx/store';

import { SalesActionsTypes } from './sales.actions';

export class ChangeTabAction implements Action {
    public readonly type: string;

    constructor(public payload: number) {
        this.type = SalesActionsTypes.CHANGE_TAB;
    }
}
