export interface IProductForm {
    id?: string;
    description?: string;
    icon?: string;
    price?: number;
    disponibility?: number;
    isValid?: boolean;
    isDirty?: boolean;
}

export const formInitialState: IProductForm = {
    id: null,
    description: null,
    icon: null,
    price: null,
    disponibility: null,
    isDirty: false,
    isValid: false,
};

export const productViewInitialState: IProductViewState = {
    isLoading: false,
    form: formInitialState,
    error: null,
};

export interface IProductViewState {
    isLoading: boolean;
    form: IProductForm;
    error: any;
}

export interface IProductState {
    productView: IProductViewState;
}
