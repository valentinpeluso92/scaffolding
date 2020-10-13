import { Product } from '../../../../../../models/api/products/product';

export const productsViewInitialState: IProductsViewState = {
    isLoading: true,
    isOpenUpdateModal: false,
    products: [],
    error: null,
};

export interface IProductsViewState {
    isLoading: boolean;
    isOpenUpdateModal: boolean;
    products: Product[];
    error: any;
}

export interface IProductsState {
    productsView: IProductsViewState;
}
