import { IProduct } from './product.interface';
import { Shop } from '../shops/shop';
import { ProductPrice } from './product-price';

import * as moment from 'moment';

export class Product implements IProduct {
    public id: string;
    public description: string;
    public icon: string; // URL del icono del product
    public disponibility: number; // Cantidad disponible
    public soldQuantity: number; // El historico de la cantidad ventas
    public shop: Shop; // Negocio en el que se compro el product
    public price: ProductPrice;
    public creationDate: moment.Moment; // Fecha de creacion.
    public eliminationDate: moment.Moment; // Fecha de eliminación automatica.
    public lastSell: moment.Moment; // Fecha del último uso.

    constructor(product: IProduct) {
        this.id = product.id;
        this.description = product.description;
        this.icon = product.icon;
        this.disponibility = product.disponibility;
        this.soldQuantity = product.soldQuantity;
        this.shop = new Shop(product.shop);
        this.price = new ProductPrice(product.price);
        this.creationDate = moment(product.creationDate);
        this.eliminationDate = moment(product.eliminationDate);
        this.lastSell = moment(product.lastSell);
    }
}
