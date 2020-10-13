import { Action } from '@ngrx/store';

import { SalesActionsTypes } from './sales.actions';

export class GetSalesAction implements Action {
    public readonly type: string;
    public payload: any = null;

    constructor() {
        this.type = SalesActionsTypes.GET_SALES;
    }
}
