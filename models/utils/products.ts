import { map } from 'lodash';

import { IProduct } from '../api/products/product.interface';
import { Product } from '../api/products/product';

export function deserializeProducts(products: IProduct[]): Product[] {
    return map(products, (product: IProduct) => {
        return deserializeProduct(product);
    });
}

export function deserializeProduct(product: IProduct): Product {
    return new Product(product);
}
