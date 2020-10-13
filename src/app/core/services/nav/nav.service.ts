import { Injectable } from '@angular/core';
import { NavItem } from '../../../../../models/api/nav/nav-item';

@Injectable()
export class NavService {
    constructor() {
        // constructor
    }

    public get(): NavItem[] {
        // TODO - Ver si no combiene implemetar servicio de api que devuelva la configuracion de la navegacion
        return [
            new NavItem('attach_money', 'Listado de ventas', '/sales'),
            new NavItem('attach_money', 'Listado de productos', '/products'),
            new NavItem('attach_money', 'Nuevo producto', '/product/create'),
        ];
    }
}
