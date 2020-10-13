import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SalesService } from './services/sales/sales.service';
import { ProductsService } from './services/products/products.service';
import { NavService } from './services/nav/nav.service';

@NgModule({
    declarations: [],
    exports: [],
    imports: [HttpClientModule],
    providers: [SalesService, ProductsService, NavService],
})
export class CoreModule {}
