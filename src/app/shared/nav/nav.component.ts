import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-nav',
    styleUrls: ['./nav.component.css'],
    templateUrl: './nav.component.html',
})
export class NavComponent {
    public isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(result => result.matches));

    constructor(private breakpointObserver: BreakpointObserver) {}

    public onSidenavClose(): void {}
}
