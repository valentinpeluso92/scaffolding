import { Action } from '@ngrx/store';

import { ProductActionsTypes } from '../product.actions';
import { Product } from '../../../../../../../models/api/products/product';

export class GetProductSuccessAction implements Action {
    public readonly type: string;

    constructor(public payload: Product) {
        this.type = ProductActionsTypes.GET_PRODUCT_SUCCESS;
    }
}
