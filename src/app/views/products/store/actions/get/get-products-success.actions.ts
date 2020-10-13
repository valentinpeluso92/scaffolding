import { Action } from '@ngrx/store';

import { ProductsActionsTypes } from '../products.actions';

import { Product } from '../../../../../../../models/api/products/product';

export class GetProductsSuccessAction implements Action {
    public readonly type: string;

    constructor(public payload: Product[]) {
        this.type = ProductsActionsTypes.GET_PRODUCTS_SUCCESS;
    }
}
