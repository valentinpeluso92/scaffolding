import { Action } from '@ngrx/store';

import { ProductActionsTypes } from '../product.actions';
import { IProductForm } from '../../states/product.state';

export class FormResetAction implements Action {
    public readonly type: string;
    public payload: IProductForm = null;

    constructor() {
        this.type = ProductActionsTypes.FORM_RESET;
    }
}
