import { Action } from '@ngrx/store';

import { SalesActionsTypes } from './sales.actions';

import { Sale } from '../../../../../../models/api/sales/sale';

export class GetSalesSuccessAction implements Action {
    public readonly type: string;

    constructor(public payload: Sale[]) {
        this.type = SalesActionsTypes.GET_SALES_SUCCESS;
    }
}
