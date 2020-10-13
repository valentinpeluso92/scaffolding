import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SalesComponent } from './sales.component';
import { SalesRoutingModule } from './sales.routes';
import { SharedModule } from '../../shared/shared.module';
import { salesReducer } from './store/reducers/sales.reducer';
import { SalesEffects } from './store/effects/sales.effects';

@NgModule({
    declarations: [SalesComponent],
    imports: [
        SalesRoutingModule,
        SharedModule,
        CommonModule,
        StoreModule.forFeature('sales', salesReducer),
        EffectsModule.forFeature([SalesEffects]),
    ],
})
export class SalesModule {}
