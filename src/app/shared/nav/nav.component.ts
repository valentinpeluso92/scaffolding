import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenavContainer } from '@angular/material';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';

import { ToggleNavAction } from './actions/toggle-nav.actions';
import { INavState } from './states/nav.state';
import * as navReducer from './reducers/nav.reducer';
import { IState } from '../shared.state';

@Component({
    selector: 'app-nav',
    styleUrls: ['./nav.component.css'],
    templateUrl: './nav.component.html',
})
export class NavComponent {
    public isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(result => result.matches));
    public nav$: Observable<INavState>;

    @ViewChild(MatSidenavContainer) public sidenavContainer: MatSidenavContainer;

    constructor(private breakpointObserver: BreakpointObserver, private sharedStore: Store<IState>) {
        this.nav$ = this.sharedStore.pipe(select(navReducer.navSelector));
    }

    public close(): void {
        this.sidenavContainer.close();
    }

    public onOpenedChange(isOpen: boolean): void {
        this.sharedStore.dispatch(new ToggleNavAction({ isOpen }));
    }
}
