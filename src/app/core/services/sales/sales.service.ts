import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ISale } from '../../../../../models/api/sales/sale.interface';
import { GET_SALES_ENDPOINT } from '../../../../../models/utils/paths';

@Injectable()
export class SalesService {
    constructor(private httpClient: HttpClient) {}

    public get(): Observable<HttpResponse<ISale[]>> {
        return this.httpClient.get<HttpResponse<ISale[]>>(GET_SALES_ENDPOINT, {});
    }
}
