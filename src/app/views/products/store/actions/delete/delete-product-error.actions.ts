import { Action } from '@ngrx/store';

import { ProductsActionsTypes } from '../products.actions';

export class DeleteProductErrorAction implements Action {
    public readonly type: string;

    constructor(public payload: any) {
        this.type = ProductsActionsTypes.DELETE_PRODUCT_ERROR;
    }
}
