import { NavComponent } from './nav.component';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app.routes';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NavEffects } from './store/effects/nav.effects';
import { reducer } from './store/reducers/nav.reducer';

@NgModule({
    declarations: [NavComponent],
    exports: [NavComponent],
    imports: [SharedModule, AppRoutingModule, CommonModule, StoreModule.forFeature('nav', reducer), EffectsModule.forFeature([NavEffects])],
    providers: [],
})
export class NavModule {}
