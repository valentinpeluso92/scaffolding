import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products.routes';
import { SharedModule } from '../../shared/shared.module';
import { productsReducer } from './store/reducers/products.reducer';
import { ProductsEffects } from './store/effects/products.effects';

@NgModule({
    declarations: [ProductsComponent],
    imports: [
        ProductsRoutingModule,
        SharedModule,
        CommonModule,
        StoreModule.forFeature('products', productsReducer),
        EffectsModule.forFeature([ProductsEffects]),
    ],
})
export class ProductsModule {}
