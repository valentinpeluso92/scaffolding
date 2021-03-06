import { Action } from '@ngrx/store';

import { ProductActionsTypes } from '../product.actions';
import { IProductForm } from '../../states/product.state';

export class UpdateProductAction implements Action {
    public readonly type: string;

    constructor(public payload: IProductForm) {
        this.type = ProductActionsTypes.UPDATE_PRODUCT;
    }
}
