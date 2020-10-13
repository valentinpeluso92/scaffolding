import { ISale } from './sale.interface';
import { Product } from '../products/product';

import { isString, isNil } from 'lodash';

import * as moment from 'moment';

export class Sale implements ISale {
    public id: string;
    public soldQuantity: number;
    public date: moment.Moment;
    public product: Product;

    constructor(sale: ISale, product?: Product) {
        this.id = sale.id;
        this.soldQuantity = sale.soldQuantity;
        this.date = moment(sale.date);

        this.product = isNil(product) ? new Product(sale.product) : product;
    }
}
