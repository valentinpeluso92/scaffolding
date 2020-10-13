import { IShop } from '../shops/shop.interface';
import { IProductPrice } from './product-price.interface';

import * as moment from 'moment';

export interface IProduct {
    id: string;
    description: string;
    icon: string; // URL del icono del product
    disponibility: number; // Cantidad disponible
    soldQuantity: number; // El historico de la cantidad ventas
    shop: IShop; // Negocio en el que se compro el product
    price: IProductPrice;
    creationDate: moment.Moment;
    eliminationDate: moment.Moment;
    lastSell: moment.Moment; // Ultima venta del producto
}
