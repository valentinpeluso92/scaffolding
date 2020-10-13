import { IProductViewState, IProductState, productViewInitialState, formInitialState } from '../states/product.state';
import { ActionReducerMap } from '@ngrx/store';
import { ProductActions, ProductActionsTypes } from '../actions/product.actions';

export const newProductReducer: ActionReducerMap<IProductState> = {
    productView: productViewReducer,
};

export function productViewReducer(state = productViewInitialState, action: ProductActions): IProductViewState {
    switch (action.type) {
        case ProductActionsTypes.FORM_PRICE_CHANGED: {
            return {
                ...state,
                form: {
                    price: action.payload.price,
                    description: state.form.description,
                    disponibility: state.form.disponibility,
                    icon: state.form.icon,
                    id: state.form.id,
                    isDirty: true,
                    isValid: action.payload.isValid,
                },
            };
        }
        case ProductActionsTypes.FORM_DESCRIPTION_CHANGED: {
            return {
                ...state,
                form: {
                    ...state.form,
                    description: action.payload.description,
                    isDirty: true,
                    isValid: action.payload.isValid,
                },
            };
        }
        case ProductActionsTypes.FORM_DISPONIBILITY_CHANGED: {
            return {
                ...state,
                form: {
                    price: state.form.price,
                    description: state.form.description,
                    disponibility: action.payload.disponibility,
                    icon: state.form.icon,
                    id: state.form.id,
                    isDirty: true,
                    isValid: action.payload.isValid,
                },
            };
        }
        case ProductActionsTypes.FORM_ICON_CHANGED: {
            return {
                ...state,
                form: {
                    price: state.form.price,
                    description: state.form.description,
                    disponibility: state.form.disponibility,
                    icon: action.payload.icon,
                    id: state.form.id,
                    isDirty: true,
                    isValid: action.payload.isValid,
                },
            };
        }
        case ProductActionsTypes.FORM_RESET: {
            return {
                ...state,
                form: formInitialState,
            };
        }
        case ProductActionsTypes.CREATE_PRODUCT: {
            return {
                ...state,
                form: action.payload,
            };
        }
        case ProductActionsTypes.UPDATE_PRODUCT: {
            return {
                ...state,
                form: action.payload,
            };
        }
        case ProductActionsTypes.GET_PRODUCT: {
            return {
                ...state,
                isLoading: true,
                form: action.payload,
            };
        }
        case ProductActionsTypes.GET_PRODUCT_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                form: {
                    description: action.payload.description,
                    disponibility: action.payload.disponibility,
                    icon: action.payload.icon,
                    price: action.payload.price.sell,
                    id: action.payload.id,
                    isDirty: false,
                    isValid: false,
                },
            };
        }
        case ProductActionsTypes.GET_PRODUCT_ERROR: {
            return {
                ...state,
                isLoading: false,
                form: {},
                error: action.payload,
            };
        }
        case ProductActionsTypes.INITIALIZE_PRODUCT: {
            return {
                ...state,
                isLoading: productViewInitialState.isLoading,
                form: productViewInitialState.form,
                error: productViewInitialState.error,
            };
        }
        default: {
            return state;
        }
    }
}
