import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IProduct } from '../../../../../models/api/products/product.interface';
import { GET_PRODUCTS_ENDPOINT, GET_PRODUCT_ENDPOINT } from '../../../../../models/utils/paths';
import { IProductForm } from '../../../views/product/store/states/product.state';

import { replace } from 'lodash';

@Injectable()
export class ProductsService {
    constructor(private httpClient: HttpClient) {}

    public getAll(): Observable<HttpResponse<IProduct[]>> {
        return this.httpClient.get<HttpResponse<IProduct[]>>(GET_PRODUCTS_ENDPOINT, {});
    }

    public create(form: IProductForm): Observable<HttpResponse<IProduct>> {
        return this.httpClient.post<HttpResponse<IProduct>>(GET_PRODUCTS_ENDPOINT, form, {});
    }

    public get(id: string): Observable<HttpResponse<IProduct>> {
        return this.httpClient.get<HttpResponse<IProduct>>(replace(GET_PRODUCT_ENDPOINT, ':id', id), {});
    }

    public delete(id: string): Observable<HttpResponse<IProduct>> {
        return this.httpClient.delete<HttpResponse<IProduct>>(replace(GET_PRODUCT_ENDPOINT, ':id', id), {});
    }

    public update(form: IProductForm): Observable<HttpResponse<IProduct>> {
        return this.httpClient.put<HttpResponse<IProduct>>(replace(GET_PRODUCT_ENDPOINT, ':id', form.id), form, {});
    }
}
