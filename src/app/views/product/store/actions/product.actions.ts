import { FormPriceChangedAction } from './form/form-price-changed.actions';
import { FormIconChangedAction } from './form/form-icon-changed.actions';
import { FormDisponibilityChangedAction } from './form/form-disponibility-changed.actions';
import { FormDescriptionChangedAction } from './form/form-description-changed.actions';
import { FormResetAction } from './form/form-reset.actions';
import { CreateProductAction } from './create/create-product.actions';
import { CreateProductSuccessAction } from './create/create-product-success.actions';
import { CreateProductErrorAction } from './create/create-product-error.actions';
import { GetProductAction } from './get/get-product.actions';
import { GetProductErrorAction } from './get/get-product-error.actions';
import { GetProductSuccessAction } from './get/get-product-success.actions';
import { InitializeProductAction } from './initialize/initialize-product.actions';
import { InitializeProductSuccessAction } from './initialize/initialize-product-success.actions';
import { UpdateProductAction } from './update/update-product.actions';
import { UpdateProductSuccessAction } from './update/update-product-success.actions';
import { UpdateProductErrorAction } from './update/update-product-error.actions';

export enum ProductActionsTypes {
    FORM_PRICE_CHANGED = 'FORM_PRICE_CHANGED',
    FORM_ICON_CHANGED = 'FORM_ICON_CHANGED',
    FORM_DISPONIBILITY_CHANGED = 'FORM_DISPONIBILITY_CHANGED',
    FORM_DESCRIPTION_CHANGED = 'FORM_DESCRIPTION_CHANGED',
    FORM_RESET = 'FORM_RESET',
    CREATE_PRODUCT = 'CREATE_PRODUCT',
    CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS',
    CREATE_PRODUCT_ERROR = 'CREATE_PRODUCT_ERROR',
    GET_PRODUCT = 'GET_PRODUCT',
    GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS',
    GET_PRODUCT_ERROR = 'GET_PRODUCT_ERROR',
    INITIALIZE_PRODUCT = 'INITIALIZE_PRODUCT',
    INITIALIZE_PRODUCT_SUCCESS = 'INITIALIZE_PRODUCT_SUCCESS',
    UPDATE_PRODUCT = 'UPDATE_PRODUCT',
    UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS',
    UPDATE_PRODUCT_ERROR = 'UPDATE_PRODUCT_ERROR',
}

export type ProductActions =
    | FormPriceChangedAction
    | FormIconChangedAction
    | FormDisponibilityChangedAction
    | FormDescriptionChangedAction
    | FormResetAction
    | CreateProductAction
    | CreateProductSuccessAction
    | CreateProductErrorAction
    | GetProductAction
    | GetProductErrorAction
    | GetProductSuccessAction
    | InitializeProductAction
    | InitializeProductSuccessAction
    | UpdateProductAction
    | UpdateProductSuccessAction
    | UpdateProductErrorAction;
