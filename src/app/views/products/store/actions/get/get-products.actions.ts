import { Action } from '@ngrx/store';

import { ProductsActionsTypes } from '../products.actions';

export class GetProductsAction implements Action {
    public readonly type: string;
    public payload: any = null;

    constructor() {
        this.type = ProductsActionsTypes.GET_PRODUCTS;
    }
}
