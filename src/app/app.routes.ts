import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'sales', loadChildren: './views/sales/sales.module#SalesModule' },
    { path: 'products', loadChildren: './views/products/products.module#ProductsModule' },
    { path: 'product', loadChildren: './views/product/product.module#ProductModule' },
    { path: 'newSale', loadChildren: './views/new-sale/new-sale.module#NewSaleModule' },
    { path: '**', redirectTo: '/sales', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
