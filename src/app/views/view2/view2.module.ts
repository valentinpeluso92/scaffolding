import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { View2Component } from './view2.component';
import { View2RoutingModule } from './view2.routes';

@NgModule({
    declarations: [View2Component],
    imports: [CommonModule, View2RoutingModule],
})
export class View2Module {}
