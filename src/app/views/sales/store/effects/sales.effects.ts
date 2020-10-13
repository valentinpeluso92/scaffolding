import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import { SalesActionsTypes } from '../actions/sales.actions';
import { GetSalesAction } from '../actions/get-sales.actions';
import { GetSalesSuccessAction } from '../actions/get-sales-success.actions';

import { ISale } from '../../../../../../models/api/sales/sale.interface';
import { Sale } from '../../../../../../models/api/sales/sale';
import { SalesService } from '../../../../core/services/sales/sales.service';
import { deserializeSales } from '../../../../../../models/utils/sales';
import { GetSalesErrorAction } from '../actions/get-sales-error.actions';

@Injectable()
export class SalesEffects {
    @Effect()
    public getSales$: Observable<Action> = this.actions$.pipe(
        ofType<GetSalesAction>(SalesActionsTypes.GET_SALES),
        switchMap((action: GetSalesAction) => {
            return this.salesService.get().pipe(
                map((response: HttpResponse<ISale[]>) => {
                    const sales: Sale[] = deserializeSales(response.body);
                    return new GetSalesSuccessAction(sales);
                }),
                catchError((error: any) => {
                    // TODO - Log error
                    // TODO - Ante el error habria que mostrar una pagina de error, redireccionar, etc.
                    return of(new GetSalesErrorAction(error));
                })
            );
        })
    );

    constructor(private actions$: Actions, private salesService: SalesService) {}
}
