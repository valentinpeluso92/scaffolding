import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';

import { isEqual } from 'lodash';

import { IProductsState } from './store/states/products.state';
import { Product } from '../../../../models/api/products/product';
import { GetProductsAction } from './store/actions/get/get-products.actions';
import { productsSelector, isLoadingSelector } from './store/selectors/products.selectors';
import { DeleteProductAction } from './store/actions/delete/delete-product.actions';
import { OpenPopupAction } from '../../shared/components/confirmation-popup/store/actions/open-popup.actions';
import { IConfirmationPopupState } from '../../shared/components/confirmation-popup/store/states/confirmation-popup.state';
import { confirmationPopupSelector } from '../../shared/components/confirmation-popup/store/selectors/confirmation-popup.selector';
import { ISharedState } from '../../shared/store/states/shared.state';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnDestroy {
    public products$: Observable<Product[]>;
    public isLoading$: Observable<boolean>;

    public displayedColumns: string[] = ['description', 'soldQuantity', 'disponibility', 'icon', 'actions'];

    private confirmationPopup$: Observable<IConfirmationPopupState>;
    private confirmationPopupSubscription: Subscription;

    constructor(private productsStore: Store<IProductsState>, private sharedStore: Store<ISharedState>) {
        this.confirmationPopup$ = this.sharedStore.pipe(select(confirmationPopupSelector));

        this.products$ = this.productsStore.pipe(select(productsSelector));
        this.isLoading$ = this.productsStore.pipe(select(isLoadingSelector));

        this.productsStore.dispatch(new GetProductsAction());
    }

    public ngOnInit(): void {
        this.confirmationPopupSubscription = this.confirmationPopup$.subscribe((confirmationPopup: IConfirmationPopupState) => {
            if (confirmationPopup.isAgree && isEqual(confirmationPopup.actionRealized, 'DELETE_PRODUCT')) {
                this.productsStore.dispatch(new DeleteProductAction(confirmationPopup.params.id));
            }
        });
    }

    public ngOnDestroy(): void {
        this.confirmationPopupSubscription.unsubscribe();
    }

    public removeProduct(product: Product): void {
        this.sharedStore.dispatch(
            new OpenPopupAction({
                msg: '¿Está seguro que desea eliminar el producto seleccionado?',
                actionRealized: 'DELETE_PRODUCT',
                params: product,
            })
        );
    }
}
