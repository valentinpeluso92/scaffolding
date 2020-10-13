import { GetSalesSuccessAction } from './get-sales-success.actions';
import { GetSalesAction } from './get-sales.actions';
import { ChangeTabAction } from './change-tab.actions';
import { GetSalesErrorAction } from './get-sales-error.actions';

export enum SalesActionsTypes {
    GET_SALES = 'GET_SALES',
    GET_SALES_SUCCESS = 'GET_SALES_SUCCESS',
    GET_SALES_ERROR = 'GET_SALES_ERROR',
    CHANGE_TAB = 'CHANGE_TAB',
}

export type SalesActions = GetSalesAction | GetSalesSuccessAction | GetSalesErrorAction | ChangeTabAction;
