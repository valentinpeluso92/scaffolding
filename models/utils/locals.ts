import { Response } from 'express';

import HttpRequestError from '../errors/http-request.error';
import Site from '../site/site';

export function getLocals(response: Response): {} {
    return response.locals;
}

export function setError(response: Response, error: HttpRequestError): void {
    response.locals.error = error;
}

export function getError(response: Response): HttpRequestError {
    return response.locals.error;
}

export function setSite(response: Response, site: Site): void {
    response.locals.site = site;
}

export function getSite(response: Response): Site {
    return response.locals.site;
}
