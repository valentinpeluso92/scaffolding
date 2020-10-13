import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { isEqual } from 'lodash';

import { ISharedState } from '../../store/states/shared.state';
import { msgSelector, typeSelector } from './store/selectors/toast.selector';
import { IToastTypes } from './store/states/toast.state';

@Component({
    selector: 'app-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.css'],
})
export class ToastComponent {
    public msg$: Observable<string>;
    public type$: Observable<IToastTypes>;

    constructor(private sharedStore: Store<ISharedState>) {
        this.msg$ = this.sharedStore.pipe(select(msgSelector));
        this.type$ = this.sharedStore.pipe(select(typeSelector));
    }

    public isSuccess(type: IToastTypes) {
        return isEqual(type, IToastTypes.SUCCESS);
    }

    public isDanger(type: IToastTypes) {
        return isEqual(type, IToastTypes.DANGER);
    }
}
