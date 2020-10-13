import { Action } from '@ngrx/store';

import { ProductsActionsTypes } from '../products.actions';

export class GetProductsErrorAction implements Action {
    public readonly type: string;

    constructor(public payload: any) {
        this.type = ProductsActionsTypes.GET_PRODUCTS_ERROR;
    }
}
