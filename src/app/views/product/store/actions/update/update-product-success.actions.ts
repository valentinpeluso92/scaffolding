import { Action } from '@ngrx/store';

import { ProductActionsTypes } from '../product.actions';
import { IProductForm } from '../../states/product.state';

export class UpdateProductSuccessAction implements Action {
    public readonly type: string;
    public payload: IProductForm = null;

    constructor() {
        this.type = ProductActionsTypes.UPDATE_PRODUCT_SUCCESS;
    }
}
