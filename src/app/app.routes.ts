import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'view1', loadChildren: './views/view1/view1.module#View1Module' },
    { path: 'view2', loadChildren: './views/view2/view2.module#View2Module' },
    { path: '**', redirectTo: '/view1', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
