import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { GetSalesAction } from './store/actions/get-sales.actions';

import { Observable } from 'rxjs';
import { tabsSelector, tabSelectedSelector, isLoadingSelector } from './store/selectors/sales.selectors';
import { ISalesState } from './store/states/sales.state';
import { Tab } from './models/tab';
import { MatTabChangeEvent } from '@angular/material';
import { ChangeTabAction } from './store/actions/change-tab.actions';
import { Sale } from '../../../../models/api/sales/sale';

import { multiply, sum, map } from 'lodash';

@Component({
    selector: 'app-sales',
    templateUrl: './sales.component.html',
    styleUrls: ['./sales.component.css'],
})
export class SalesComponent {
    public tabs$: Observable<Tab[]>;
    public tabSelected$: Observable<number>;
    public isLoading$: Observable<boolean>;

    public displayedColumns: string[] = ['description', 'soldQuantity', 'income', 'icon'];

    constructor(private salesStore: Store<ISalesState>) {
        this.salesStore.dispatch(new GetSalesAction());
        this.tabs$ = this.salesStore.pipe(select(tabsSelector));
        this.tabSelected$ = this.salesStore.pipe(select(tabSelectedSelector));
        this.isLoading$ = this.salesStore.pipe(select(isLoadingSelector));
    }

    public onChangeTab(selectedTab: MatTabChangeEvent): void {
        this.salesStore.dispatch(new ChangeTabAction(selectedTab.index));
    }

    public getIncome(sale: Sale): number {
        return multiply(sale.product.price.sell, sale.soldQuantity);
    }

    public getSoldQuantityTotal(sales: Sale[]): number {
        return sum(map(sales, 'soldQuantity'));
    }

    public getTotalIncome(sales: Sale[]): number {
        return sum(
            map(sales, (sale: Sale) => {
                return this.getIncome(sale);
            })
        );
    }
}
