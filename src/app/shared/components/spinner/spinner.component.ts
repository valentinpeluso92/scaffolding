import { Component } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { ISharedState } from '../../store/states/shared.state';
import { isShownSelector } from './store/selectors/spinner.selector';

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent {
    public isSown$: Observable<boolean>;

    constructor(private sharedStore: Store<ISharedState>) {
        this.isSown$ = this.sharedStore.pipe(select(isShownSelector));
    }
}
