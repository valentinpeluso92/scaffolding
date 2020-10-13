import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of, merge } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import { ProductsActionsTypes } from '../actions/products.actions';
import { GetProductsAction } from '../actions/get/get-products.actions';
import { GetProductsSuccessAction } from '../actions/get/get-products-success.actions';

import { IProduct } from '../../../../../../models/api/products/product.interface';
import { Product } from '../../../../../../models/api/products/product';
import { ProductsService } from '../../../../core/services/products/products.service';
import { deserializeProducts, deserializeProduct } from '../../../../../../models/utils/products';
import { GetProductsErrorAction } from '../actions/get/get-products-error.actions';
import { DeleteProductAction } from '../actions/delete/delete-product.actions';
import { ShowSpinnerAction } from '../../../../shared/components/spinner/store/actions/show-spinner.actions';
import { DeleteProductSuccessAction } from '../actions/delete/delete-product-success.actions';
import { DeleteProductErrorAction } from '../actions/delete/delete-product-error.actions';
import { OpenToastAction } from '../../../../shared/components/toast/store/actions/open-toast.actions';
import { IToastTypes } from '../../../../shared/components/toast/store/states/toast.state';
import { HideSpinnerAction } from '../../../../shared/components/spinner/store/actions/hide-spinner.actions';
import { ClosePopupAction } from '../../../../shared/components/confirmation-popup/store/actions/close-popup.actions';

@Injectable()
export class ProductsEffects {
    @Effect()
    public getProducts$: Observable<Action> = this.actions$.pipe(
        ofType<GetProductsAction>(ProductsActionsTypes.GET_PRODUCTS),
        switchMap((action: GetProductsAction) => {
            return this.productsService.getAll().pipe(
                map((response: HttpResponse<IProduct[]>) => {
                    const products: Product[] = deserializeProducts(response.body);
                    return new GetProductsSuccessAction(products);
                }),
                catchError((error: any) => {
                    // TODO - Log error
                    // TODO - Ante el error habria que mostrar una pagina de error, redireccionar, etc.
                    return of(new GetProductsErrorAction(error));
                })
            );
        })
    );

    @Effect()
    public deleteProduct$: Observable<Action> = this.actions$.pipe(
        ofType<DeleteProductAction>(ProductsActionsTypes.DELETE_PRODUCT),
        switchMap((action: DeleteProductAction) => {
            return merge(
                of(new ShowSpinnerAction(), new ClosePopupAction()),
                this.productsService.delete(action.payload).pipe(
                    map((response: HttpResponse<IProduct>) => {
                        const product: Product = deserializeProduct(response.body);
                        return new DeleteProductSuccessAction();
                    }),
                    catchError((error: any) => {
                        // TODO - Log error
                        return of(new DeleteProductErrorAction(error));
                    })
                )
            );
        })
    );

    @Effect()
    public deleteProductSuccess$: Observable<Action> = this.actions$.pipe(
        ofType<DeleteProductSuccessAction>(ProductsActionsTypes.DELETE_PRODUCT_SUCCESS),
        switchMap((action: DeleteProductSuccessAction) => {
            this.router.navigate(['/products']);

            return of(
                new OpenToastAction({ msg: 'Producto eliminado correctamente!', type: IToastTypes.SUCCESS }),
                new HideSpinnerAction(),
                new GetProductsAction()
            );
        })
    );

    @Effect()
    public deleteProductError$: Observable<Action> = this.actions$.pipe(
        ofType<DeleteProductErrorAction>(ProductsActionsTypes.DELETE_PRODUCT_ERROR),
        switchMap((action: DeleteProductErrorAction) => {
            return of(new OpenToastAction({ msg: 'Ha ocurrido un error inesperado!', type: IToastTypes.DANGER }), new HideSpinnerAction());
        })
    );

    constructor(private actions$: Actions, private productsService: ProductsService, private router: Router) {}
}
