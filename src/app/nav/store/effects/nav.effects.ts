import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GetNavAction } from '../actions/get-nav.actions';
import { NavActionsTypes } from '../actions/nav.actions';
import { NavItem } from '../../../../../models/api/nav/nav-item';
import { GetNavSuccessAction } from '../actions/get-nav-success.actions';
import { NavService } from '../../../core/services/nav/nav.service';

@Injectable()
export class NavEffects {
    @Effect()
    public getNav$: Observable<Action> = this.actions$.pipe(
        ofType<GetNavAction>(NavActionsTypes.GET_NAV),
        switchMap((action: GetNavAction) => {
            const response: NavItem[] = this.navService.get();
            return of(new GetNavSuccessAction(response));
        })
    );

    constructor(private actions$: Actions, private navService: NavService) {}
}
