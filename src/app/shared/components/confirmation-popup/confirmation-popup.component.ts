import { Component, Inject, OnDestroy } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ISharedState } from '../../store/states/shared.state';
import { Observable, Subscription } from 'rxjs';
import { msgSelector } from './store/selectors/confirmation-popup.selector';
import { ClosePopupAction } from './store/actions/close-popup.actions';
import { IsAgreeAction } from './store/actions/is-agree.actions';

@Component({
    selector: 'app-confirmation-popup',
    templateUrl: './confirmation-popup.component.html',
    styleUrls: ['./confirmation-popup.component.css'],
})
export class ConfirmationPopupComponent implements OnDestroy {
    public msg$: Observable<string>;

    private dialogRefSubscription: Subscription;
    private isAgree = false;

    constructor(public dialogRef: MatDialogRef<ConfirmationPopupComponent>, private sharedStore: Store<ISharedState>) {
        this.msg$ = this.sharedStore.pipe(select(msgSelector));

        this.dialogRefSubscription = this.dialogRef.beforeClosed().subscribe(() => {
            if (this.isAgree) {
                this.sharedStore.dispatch(new IsAgreeAction());
            } else {
                this.sharedStore.dispatch(new ClosePopupAction());
            }
        });
    }

    public ngOnDestroy(): void {
        this.dialogRefSubscription.unsubscribe();
    }

    public disagreement(): void {
        this.isAgree = false;
        this.dialogRef.close();
    }

    public agree(): void {
        this.isAgree = true;
        this.dialogRef.close();
    }
}
