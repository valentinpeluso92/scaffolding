import { GetProductsAction } from './get/get-products.actions';
import { GetProductsSuccessAction } from './get/get-products-success.actions';
import { GetProductsErrorAction } from './get/get-products-error.actions';
import { DeleteProductAction } from './delete/delete-product.actions';
import { DeleteProductSuccessAction } from './delete/delete-product-success.actions';
import { DeleteProductErrorAction } from './delete/delete-product-error.actions';

export enum ProductsActionsTypes {
    GET_PRODUCTS = 'GET_PRODUCTS',
    GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS',
    GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR',
    DELETE_PRODUCT = 'DELETE_PRODUCT',
    DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS',
    DELETE_PRODUCT_ERROR = 'DELETE_PRODUCT_ERROR',
}

export type ProductsActions =
    | GetProductsAction
    | GetProductsSuccessAction
    | GetProductsErrorAction
    | DeleteProductAction
    | DeleteProductSuccessAction
    | DeleteProductErrorAction;
