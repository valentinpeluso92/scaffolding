import { Action } from '@ngrx/store';

import { ProductActionsTypes } from '../product.actions';

export class GetProductErrorAction implements Action {
    public readonly type: string;

    // TODO - Typificar el error
    constructor(public payload: any) {
        this.type = ProductActionsTypes.GET_PRODUCT_ERROR;
    }
}
