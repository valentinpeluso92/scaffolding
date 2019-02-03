import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatNavList,
  MatSidenavContainer,
  MatSidenavContent,
  MatToolbar
} from '@angular/material';

import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [CommonModule, MatSidenavModule, MatToolbarModule],
  declarations: [NavComponent, MatNavList],
  exports: [NavComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
