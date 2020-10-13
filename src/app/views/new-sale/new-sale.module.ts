import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewSaleComponent } from './new-sale.component';
import { NewSaleRoutingModule } from './new-sale.routes';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [NewSaleComponent],
    imports: [NewSaleRoutingModule, SharedModule, CommonModule],
})
export class NewSaleModule {}
