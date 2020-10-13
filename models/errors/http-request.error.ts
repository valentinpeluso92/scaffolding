import BaseError from './base.error';

import { get } from 'lodash';

class HttpRequestError extends BaseError {
    public status: number;
    public message: string;
    public error: any;

    constructor(status: number, message: string, err: any) {
        super();
        this.status = status;
        this.message = message;
        this.error = err;
    }

    getCode(): string {
        return get(this.error, 'code');
    }
}

export default HttpRequestError;
