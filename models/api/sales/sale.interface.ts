import { IProduct } from '../products/product.interface';

import * as moment from 'moment';

export interface ISale {
    id: string;
    soldQuantity: number; // Cantidad de productos iguales vendidos
    date: moment.Moment; // Fecha en que se realizo la venta
    product: IProduct;
}
