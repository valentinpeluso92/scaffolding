import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { OpenPopupAction } from '../actions/open-popup.actions';
import { ConfirmationPopupActionsTypes } from '../actions/confirmation-popup.actions';
import { MatDialog } from '@angular/material';
import { ConfirmationPopupComponent } from '../../confirmation-popup.component';
import { OpenPopupSuccessAction } from '../actions/open-popup-success.actions';

@Injectable()
export class ConfirmationPopupEffects {
    @Effect()
    public openConfirmationPopup$: Observable<Action> = this.actions$.pipe(
        ofType<OpenPopupAction>(ConfirmationPopupActionsTypes.OPEN_POPUP),
        switchMap((action: OpenPopupAction) => {
            this.dialog.open(ConfirmationPopupComponent, {
                width: '250px',
                data: {
                    msg: action.payload,
                },
            });
            return of(new OpenPopupSuccessAction());
        })
    );

    constructor(private actions$: Actions, private dialog: MatDialog) {}
}
