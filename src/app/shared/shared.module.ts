import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AddButtonComponent } from './components/add-button/add-button.component';
import { MaterialModule } from '../material.module';
import { sharedReducer } from './store/reducers/shared.reducer';
import { ConfirmationPopupEffects } from './components/confirmation-popup/store/effects/confirmation-popup.effects';
import { ConfirmationPopupComponent } from './components/confirmation-popup/confirmation-popup.component';
import { ToastComponent } from './components/toast/toast.component';
import { ToastEffects } from './components/toast/store/effects/toast.effects';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
    declarations: [AddButtonComponent, ConfirmationPopupComponent, ToastComponent, SpinnerComponent],
    entryComponents: [AddButtonComponent, ConfirmationPopupComponent, ToastComponent, SpinnerComponent],
    exports: [MaterialModule, AddButtonComponent, SpinnerComponent],
    imports: [
        CommonModule,
        FormsModule,
        StoreModule.forFeature('shared', sharedReducer),
        EffectsModule.forFeature([ConfirmationPopupEffects, ToastEffects]),
        MaterialModule,
        RouterModule,
    ],
})
export class SharedModule {}
