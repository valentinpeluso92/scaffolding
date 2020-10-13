import { Action } from '@ngrx/store';

import { ProductsActionsTypes } from '../products.actions';

export class DeleteProductSuccessAction implements Action {
    public readonly type: string;
    public payload: any = null;

    constructor() {
        this.type = ProductsActionsTypes.DELETE_PRODUCT_SUCCESS;
    }
}
