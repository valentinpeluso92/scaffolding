import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenavContainer } from '@angular/material';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-nav',
    styleUrls: ['./nav.component.css'],
    templateUrl: './nav.component.html',
})
export class NavComponent {
    public isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(result => result.matches));

    @ViewChild(MatSidenavContainer) public sidenavContainer: MatSidenavContainer;

    constructor(private breakpointObserver: BreakpointObserver) {}

    public close(): void {
        this.sidenavContainer.close();
    }
}
