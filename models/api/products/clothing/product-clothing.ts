import { IProductClothing } from './product-clothing.interface';
import { Product } from '../product';
import { ClothingSizes } from './sizes.enum';
import { ClothingCodes } from './codes.enum';

export class ProductClothing extends Product implements IProductClothing {
    public size: ClothingSizes;
    public code: ClothingCodes;
}
