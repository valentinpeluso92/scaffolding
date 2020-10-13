import { Action } from '@ngrx/store';

import { ProductsActionsTypes } from '../products.actions';

export class DeleteProductAction implements Action {
    public readonly type: string;

    constructor(public payload: string) {
        this.type = ProductsActionsTypes.DELETE_PRODUCT;
    }
}
