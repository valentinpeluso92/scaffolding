import { orderBy, forEach, isNil, map, filter, isEqual, isEmpty } from 'lodash';
import { Sale } from '../api/sales/sale';

import * as moment from 'moment';

import { ISale } from '../api/sales/sale.interface';
import { IProduct } from '../api/products/product.interface';
import { Product } from '../api/products/product';
import { deserializeProducts } from './products';

import { find } from 'lodash';

export function deserializeSales(sales: ISale[]): Sale[] {
    return map(sales, (sale: ISale) => {
        return new Sale(sale);
    });
}

export function deserializeSalesWithProducts(sales: ISale[], productsMock: IProduct[]): Sale[] {
    const products: Product[] = deserializeProducts(productsMock);

    return map(sales, (sale: ISale) => {
        const product: Product = find(products, ['id', sale.product]);
        return new Sale(sale, product);
    });
}

export function orderSalesByDate(sales: Sale[]): Sale[] {
    return orderBy(
        sales,
        (sale: Sale) => {
            return sale.date;
        },
        'desc'
    );
}

export function getTodaySales(sales: Sale[]): Sale[] {
    return filter(sales, (sale: Sale) => {
        return isTodaySale(sale);
    });
}

export function getNotTodaySales(sales: Sale[]): Sale[] {
    return filter(sales, (sale: Sale) => {
        return !isTodaySale(sale);
    });
}

export function hasTodaySales(sales: Sale[]): boolean {
    return isEmpty(getTodaySales(sales));
}

export function isTodaySale(sale: Sale): boolean {
    const today = moment(new Date(), 'DD-MM-YYYY');
    return isEqual(today.diff(sale.date, 'days'), 0);
}

export function getLastTwoDaysWithSales(sales: Sale[]): Sale[] {
    let currentDate: moment.Moment;
    let cant = 2;

    const result: Sale[] = [];

    const orderSales: Sale[] = orderSalesByDate(sales);

    forEach(orderSales, (sale: Sale) => {
        if (!isTodaySale(sale)) {
            if (isNil(currentDate) || (currentDate.isAfter(sale.date) && cant > 0)) {
                cant -= 1;
                currentDate = sale.date;
                result.push(sale);
            } else if (currentDate.isSame(sale.date)) {
                result.push(sale);
            }
        }
    });

    return result;
}
