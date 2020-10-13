import { ActionReducerMap } from '@ngrx/store';

import { salesViewInitialState, ISalesViewState, ISalesState } from '../states/sales.state';
import { SalesActions, SalesActionsTypes } from '../actions/sales.actions';
import { Sale } from '../../../../../../models/api/sales/sale';
import { Tab } from '../../models/tab';

import { groupBy, map, concat, reverse } from 'lodash';

import { getTodaySales, getNotTodaySales } from '../../../../../../models/utils/sales';

export const salesReducer: ActionReducerMap<ISalesState> = {
    salesView: salesViewReducer,
};

export function salesViewReducer(state = salesViewInitialState, action: SalesActions): ISalesViewState {
    switch (action.type) {
        case SalesActionsTypes.GET_SALES_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                tabs: getTabs(action.payload),
            };
        }
        case SalesActionsTypes.CHANGE_TAB: {
            return {
                ...state,
                tabSelected: action.payload,
            };
        }
        case SalesActionsTypes.GET_SALES_ERROR: {
            return {
                ...state,
                error: action.payload,
            };
        }
        default: {
            return state;
        }
    }
}

function getTabs(sales: Sale[]): Tab[] {
    const todaySales: Sale[] = getTodaySales(sales);
    const notTodaySales: Sale[] = getNotTodaySales(sales);

    const groupedSales: {} = groupBy(notTodaySales, (sale: Sale) => {
        return sale.date.format('DD-MM-YYYY');
    });

    const tabs: Tab[] = map(groupedSales, (value: Sale[], key: string) => {
        return new Tab(key, value);
    });

    const todayTab: Tab = new Tab('Hoy', todaySales);

    return concat(reverse(tabs), [todayTab]);
}
