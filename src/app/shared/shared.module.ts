import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import * as fromSharedState from './shared.reducer';

@NgModule({
    declarations: [],
    exports: [],
    imports: [CommonModule, StoreModule.forFeature('shared', fromSharedState.reducers)],
})
export class SharedModule {}
