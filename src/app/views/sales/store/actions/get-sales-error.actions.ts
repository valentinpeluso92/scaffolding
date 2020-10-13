import { Action } from '@ngrx/store';

import { SalesActionsTypes } from './sales.actions';

export class GetSalesErrorAction implements Action {
    public readonly type: string;

    constructor(public payload: any) {
        this.type = SalesActionsTypes.GET_SALES_ERROR;
    }
}
