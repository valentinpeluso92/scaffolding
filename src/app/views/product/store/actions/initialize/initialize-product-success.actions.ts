import { Action } from '@ngrx/store';

import { ProductActionsTypes } from '../product.actions';
import { IProductForm } from '../../states/product.state';

export class InitializeProductSuccessAction implements Action {
    public readonly type: string;
    public payload: IProductForm = null;

    constructor() {
        this.type = ProductActionsTypes.INITIALIZE_PRODUCT_SUCCESS;
    }
}
