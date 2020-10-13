import { IProduct } from '../product.interface';
import { ClothingSizes } from './sizes.enum';
import { ClothingCodes } from './codes.enum';

export interface IProductClothing extends IProduct {
    size: ClothingSizes;
    code: ClothingCodes;
}
