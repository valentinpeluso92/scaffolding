import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenavContainer } from '@angular/material';

import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';

import { isOpenNavSelector, navItemsSelector, navItemSelectedSelector, isLoadingSelector } from './store/selectors/nav.selectors';
import { ToggleNavAction } from './store/actions/toggle-nav.actions';
import { GetNavAction } from './store/actions/get-nav.actions';
import { NavItem } from '../../../models/api/nav/nav-item';
import { ChangeNavItemAction } from './store/actions/change-nav-item.actions';
import { IState } from './store/states/nav.state';

@Component({
    selector: 'app-nav',
    styleUrls: ['./nav.component.css'],
    templateUrl: './nav.component.html',
})
export class NavComponent {
    public isOpened$: Observable<boolean>;
    public items$: Observable<NavItem[]>;
    public itemSelected$: Observable<NavItem>;
    public isLoading$: Observable<boolean>;

    @ViewChild(MatSidenavContainer) public sidenavContainer: MatSidenavContainer;

    constructor(private navStore: Store<IState>) {
        this.navStore.dispatch(new GetNavAction());
        this.isOpened$ = this.navStore.pipe(select(isOpenNavSelector));
        this.items$ = this.navStore.pipe(select(navItemsSelector));
        this.itemSelected$ = this.navStore.pipe(select(navItemSelectedSelector));
        this.isLoading$ = this.navStore.pipe(select(isLoadingSelector));
    }

    public changeItem(item: NavItem): void {
        this.navStore.dispatch(new ChangeNavItemAction(item));
        this.sidenavContainer.close();
    }

    public toggleNav(isOpen: boolean): void {
        this.navStore.dispatch(new ToggleNavAction(isOpen));
    }
}
