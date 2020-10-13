import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product.routes';
import { SharedModule } from '../../shared/shared.module';
import { newProductReducer } from './store/reducers/product.reducer';
import { FormComponent } from './components/form/form.component';
import { ProductEffects } from './store/effects/product.effects';

@NgModule({
    declarations: [ProductComponent, FormComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ProductRoutingModule,
        SharedModule,
        StoreModule.forFeature('newProduct', newProductReducer),
        EffectsModule.forFeature([ProductEffects]),
    ],
})
export class ProductModule {}
