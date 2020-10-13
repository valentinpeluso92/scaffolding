import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { MatSnackBar } from '@angular/material';

import { OpenToastAction } from '../actions/open-toast.actions';
import { ToastActionsTypes } from '../actions/toast.actions';
import { ToastComponent } from '../../toast.component';
import { OpenToastSuccessAction } from '../actions/open-toast-success.actions';

@Injectable()
export class ToastEffects {
    @Effect()
    public openToast$: Observable<Action> = this.actions$.pipe(
        ofType<OpenToastAction>(ToastActionsTypes.OPEN_TOAST),
        switchMap((action: OpenToastAction) => {
            this.toast.openFromComponent(ToastComponent, {
                duration: 5000, // 5 segundos TODO - Mover a constante
            });
            return of(new OpenToastSuccessAction());
        })
    );

    constructor(private actions$: Actions, private toast: MatSnackBar) {}
}
