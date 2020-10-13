import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { ActivatedRoute } from '@angular/router';

import { Observable, Subscription } from 'rxjs';

import { isEqual, isEmpty } from 'lodash';

import { IProductState, IProductForm } from './store/states/product.state';
import { ISharedState } from '../../shared/store/states/shared.state';
import { OpenPopupAction } from '../../shared/components/confirmation-popup/store/actions/open-popup.actions';
import { confirmationPopupSelector } from '../../shared/components/confirmation-popup/store/selectors/confirmation-popup.selector';
import { IConfirmationPopupState } from '../../shared/components/confirmation-popup/store/states/confirmation-popup.state';
import { productFormSelector, isLoadingSelector } from './store/selectors/product.selectors';
import { FormResetAction } from './store/actions/form/form-reset.actions';
import { CreateProductAction } from './store/actions/create/create-product.actions';
import { InitializeProductAction } from './store/actions/initialize/initialize-product.actions';
import { UpdateProductAction } from './store/actions/update/update-product.actions';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit, OnDestroy {
    public productForm$: Observable<IProductForm>;
    public isLoading$: Observable<boolean>;

    private confirmationPopup$: Observable<IConfirmationPopupState>;

    private confirmationPopupSubscription: Subscription;
    private productFormSubscription: Subscription;

    private form: IProductForm;

    constructor(private productStore: Store<IProductState>, private sharedStore: Store<ISharedState>, private route: ActivatedRoute) {
        this.confirmationPopup$ = this.sharedStore.pipe(select(confirmationPopupSelector));
        this.productForm$ = this.productStore.pipe(select(productFormSelector));
        this.isLoading$ = this.productStore.pipe(select(isLoadingSelector));

        const productId = this.route.snapshot.paramMap.get('id');
        this.sharedStore.dispatch(new InitializeProductAction({ id: productId }));
    }

    public ngOnInit(): void {
        this.confirmationPopupSubscription = this.confirmationPopup$.subscribe((confirmationPopup: IConfirmationPopupState) => {
            if (confirmationPopup.isAgree && isEqual(confirmationPopup.actionRealized, 'CREATE_PRODUCT')) {
                this.sharedStore.dispatch(new CreateProductAction(this.form));
            } else if (confirmationPopup.isAgree && isEqual(confirmationPopup.actionRealized, 'UPDATE_PRODUCT')) {
                this.sharedStore.dispatch(new UpdateProductAction(this.form));
            }
        });
        this.productFormSubscription = this.productForm$.subscribe((form: IProductForm) => {
            this.form = form;
        });
    }

    public ngOnDestroy(): void {
        this.confirmationPopupSubscription.unsubscribe();
        this.productFormSubscription.unsubscribe();
    }

    public save(): void {
        if (!isEmpty(this.form.id)) {
            this.sharedStore.dispatch(
                new OpenPopupAction({
                    msg: '¿Está seguro que desea actualizar el producto seleccionado?',
                    actionRealized: 'UPDATE_PRODUCT',
                })
            );
        } else {
            this.sharedStore.dispatch(
                new OpenPopupAction({ msg: '¿Está seguro que desea crear un nuevo producto?', actionRealized: 'CREATE_PRODUCT' })
            );
        }
    }

    public reset(): void {
        this.sharedStore.dispatch(new FormResetAction());
    }
}
