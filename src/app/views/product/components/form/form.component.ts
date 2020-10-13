import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { distinctUntilChanged } from 'rxjs/operators';

import { isNil } from 'lodash';

import { IProductForm, IProductState } from '../../store/states/product.state';
import { FormDescriptionChangedAction } from '../../store/actions/form/form-description-changed.actions';
import { Subscription } from 'rxjs';
import { FormIconChangedAction } from '../../store/actions/form/form-icon-changed.actions';
import { FormPriceChangedAction } from '../../store/actions/form/form-price-changed.actions';
import { FormDisponibilityChangedAction } from '../../store/actions/form/form-disponibility-changed.actions';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit, OnDestroy, OnChanges {
    @Input() public form: IProductForm;
    @Input() public isLoading: boolean;

    public formGroup: FormGroup;

    private descriptionSubscription: Subscription;
    private iconSubscription: Subscription;
    private priceSubscription: Subscription;
    private disponibilitySubscription: Subscription;

    constructor(private formBuilder: FormBuilder, private productStore: Store<IProductState>) {}

    public ngOnInit() {
        this.formGroup = this.formBuilder.group({
            description: new FormControl(this.form.description, {
                updateOn: 'blur',
                validators: [Validators.required, Validators.maxLength(100)],
            }),
            icon: new FormControl(this.form.icon, {
                updateOn: 'blur',
                validators: [Validators.required, Validators.maxLength(20)],
            }),
            price: new FormControl(this.form.price, {
                updateOn: 'blur',
                validators: [Validators.required, Validators.maxLength(10)],
            }),
            disponibility: new FormControl(this.form.disponibility, {
                updateOn: 'blur',
                validators: [Validators.required, Validators.maxLength(5)],
            }),
        });
        this.subscribeValues();
    }

    public ngOnDestroy(): void {
        this.descriptionSubscription.unsubscribe();
        this.iconSubscription.unsubscribe();
        this.priceSubscription.unsubscribe();
        this.disponibilitySubscription.unsubscribe();
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (!changes.form || changes.form.isFirstChange()) {
            return;
        }
        this.ngOnInit();
    }

    public subscribeValues(): void {
        this.descriptionSubscription = this.formGroup.controls.description.valueChanges
            .pipe(distinctUntilChanged())
            .subscribe((value: string) => {
                this.productStore.dispatch(
                    new FormDescriptionChangedAction({
                        description: value,
                        isValid: !this.hasError(),
                    })
                );
            });
        this.iconSubscription = this.formGroup.controls.icon.valueChanges.pipe(distinctUntilChanged()).subscribe((value: string) => {
            this.productStore.dispatch(
                new FormIconChangedAction({
                    icon: value,
                    isValid: !this.hasError(),
                })
            );
        });
        this.priceSubscription = this.formGroup.controls.price.valueChanges.pipe(distinctUntilChanged()).subscribe((value: number) => {
            this.productStore.dispatch(
                new FormPriceChangedAction({
                    price: value,
                    isValid: !this.hasError(),
                })
            );
        });
        this.disponibilitySubscription = this.formGroup.controls.disponibility.valueChanges
            .pipe(distinctUntilChanged())
            .subscribe((value: number) => {
                this.productStore.dispatch(
                    new FormDisponibilityChangedAction({
                        disponibility: value,
                        isValid: !this.hasError(),
                    })
                );
            });
    }

    public hasError(): boolean {
        return (
            this.formGroup.controls.disponibility.hasError('required') ||
            this.formGroup.controls.disponibility.hasError('maxlength') ||
            this.formGroup.controls.price.hasError('required') ||
            this.formGroup.controls.price.hasError('maxlength') ||
            this.formGroup.controls.description.hasError('required') ||
            this.formGroup.controls.description.hasError('maxlength') ||
            this.formGroup.controls.icon.hasError('required') ||
            this.formGroup.controls.icon.hasError('maxlength')
        );
    }
}
