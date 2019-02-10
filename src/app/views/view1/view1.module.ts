import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { View1Component } from './view1.component';
import { View1RoutingModule } from './view1.routes';

@NgModule({
    declarations: [View1Component],
    imports: [CommonModule, View1RoutingModule],
})
export class View1Module {}
