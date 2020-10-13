import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of, merge } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import { isEmpty } from 'lodash';

import { ProductsService } from '../../../../core/services/products/products.service';
import { CreateProductAction } from '../actions/create/create-product.actions';
import { ProductActionsTypes } from '../actions/product.actions';
import { IProduct } from '../../../../../../models/api/products/product.interface';
import { Product } from '../../../../../../models/api/products/product';
import { deserializeProduct } from '../../../../../../models/utils/products';
import { CreateProductSuccessAction } from '../actions/create/create-product-success.actions';
import { CreateProductErrorAction } from '../actions/create/create-product-error.actions';
import { OpenToastAction } from '../../../../shared/components/toast/store/actions/open-toast.actions';
import { IToastTypes } from '../../../../shared/components/toast/store/states/toast.state';
import { HideSpinnerAction } from '../../../../shared/components/spinner/store/actions/hide-spinner.actions';
import { ShowSpinnerAction } from '../../../../shared/components/spinner/store/actions/show-spinner.actions';
import { FormResetAction } from '../actions/form/form-reset.actions';
import { GetProductAction } from '../actions/get/get-product.actions';
import { GetProductSuccessAction } from '../actions/get/get-product-success.actions';
import { GetProductErrorAction } from '../actions/get/get-product-error.actions';
import { InitializeProductAction } from '../actions/initialize/initialize-product.actions';
import { InitializeProductSuccessAction } from '../actions/initialize/initialize-product-success.actions';
import { UpdateProductAction } from '../actions/update/update-product.actions';
import { UpdateProductSuccessAction } from '../actions/update/update-product-success.actions';
import { UpdateProductErrorAction } from '../actions/update/update-product-error.actions';
import { ClosePopupAction } from '../../../../shared/components/confirmation-popup/store/actions/close-popup.actions';

@Injectable()
export class ProductEffects {
    @Effect()
    public updateProduct$: Observable<Action> = this.actions$.pipe(
        ofType<UpdateProductAction>(ProductActionsTypes.UPDATE_PRODUCT),
        switchMap((action: UpdateProductAction) => {
            return merge(
                of(new ShowSpinnerAction(), new ClosePopupAction()),
                this.productsService.update(action.payload).pipe(
                    map((response: HttpResponse<IProduct>) => {
                        const product: Product = deserializeProduct(response.body);
                        return new UpdateProductSuccessAction();
                    }),
                    catchError((error: any) => {
                        // TODO - Log error
                        return of(new UpdateProductErrorAction(error));
                    })
                )
            );
        })
    );

    @Effect()
    public updateProductSuccess$: Observable<Action> = this.actions$.pipe(
        ofType<UpdateProductSuccessAction>(ProductActionsTypes.UPDATE_PRODUCT_SUCCESS),
        switchMap((action: UpdateProductSuccessAction) => {
            this.router.navigate(['/products']);

            return of(
                new OpenToastAction({ msg: 'Producto actualizado correctamente!', type: IToastTypes.SUCCESS }),
                new HideSpinnerAction()
            );
        })
    );

    @Effect()
    public updateProductError$: Observable<Action> = this.actions$.pipe(
        ofType<UpdateProductErrorAction>(ProductActionsTypes.UPDATE_PRODUCT_ERROR),
        switchMap((action: UpdateProductErrorAction) => {
            return of(new OpenToastAction({ msg: 'Ha ocurrido un error inesperado!', type: IToastTypes.DANGER }), new HideSpinnerAction());
        })
    );

    @Effect()
    public createProduct$: Observable<Action> = this.actions$.pipe(
        ofType<CreateProductAction>(ProductActionsTypes.CREATE_PRODUCT),
        switchMap((action: CreateProductAction) => {
            return merge(
                of(new ShowSpinnerAction(), new ClosePopupAction()),
                this.productsService.create(action.payload).pipe(
                    map((response: HttpResponse<IProduct>) => {
                        const product: Product = deserializeProduct(response.body);
                        return new CreateProductSuccessAction();
                    }),
                    catchError((error: any) => {
                        // TODO - Log error
                        return of(new CreateProductErrorAction(error));
                    })
                )
            );
        })
    );

    @Effect()
    public createProductSuccess$: Observable<Action> = this.actions$.pipe(
        ofType<CreateProductSuccessAction>(ProductActionsTypes.CREATE_PRODUCT_SUCCESS),
        switchMap((action: CreateProductSuccessAction) => {
            return of(
                new OpenToastAction({ msg: 'Producto creado correctamente!', type: IToastTypes.SUCCESS }),
                new HideSpinnerAction(),
                new FormResetAction()
            );
        })
    );

    @Effect()
    public createProductError$: Observable<Action> = this.actions$.pipe(
        ofType<CreateProductErrorAction>(ProductActionsTypes.CREATE_PRODUCT_ERROR),
        switchMap((action: CreateProductErrorAction) => {
            return of(new OpenToastAction({ msg: 'Ha ocurrido un error inesperado!', type: IToastTypes.DANGER }), new HideSpinnerAction());
        })
    );

    @Effect()
    public getProduct$: Observable<Action> = this.actions$.pipe(
        ofType<GetProductAction>(ProductActionsTypes.GET_PRODUCT),
        switchMap((action: GetProductAction) => {
            return this.productsService.get(action.payload.id).pipe(
                map((response: HttpResponse<IProduct>) => {
                    const product: Product = deserializeProduct(response.body);
                    return new GetProductSuccessAction(product);
                }),
                catchError((error: any) => {
                    // TODO - Log error
                    return of(new GetProductErrorAction(error));
                })
            );
        })
    );

    @Effect()
    public getProductError$: Observable<Action> = this.actions$.pipe(
        ofType<GetProductErrorAction>(ProductActionsTypes.GET_PRODUCT_ERROR),
        switchMap((action: GetProductErrorAction) => {
            this.router.navigate(['/products']);

            return of(new OpenToastAction({ msg: 'Ha ocurrido un error inesperado!', type: IToastTypes.DANGER }), new HideSpinnerAction());
        })
    );

    @Effect()
    public initializeProduct$: Observable<Action> = this.actions$.pipe(
        ofType<InitializeProductAction>(ProductActionsTypes.INITIALIZE_PRODUCT),
        switchMap((action: InitializeProductAction) => {
            if (!isEmpty(action.payload.id)) {
                // Dispach accion de get product
                return of(new InitializeProductSuccessAction(), new GetProductAction({ id: action.payload.id }));
            }

            return of(new InitializeProductSuccessAction());
        })
    );

    constructor(private actions$: Actions, private productsService: ProductsService, private router: Router) {}
}
