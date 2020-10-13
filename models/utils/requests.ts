import { Request } from 'express';

import { isEqual, pickBy, replace, split, filter, isEmpty } from 'lodash';
import { randomChar } from './strings';

export function getSecuredUrl(request: Request): string {
    return `https://${request.hostname}${request.originalUrl}`;
}
export function getUrl(request: Request): string {
    return `${request.protocol}://${request.hostname}${request.originalUrl}`;
}
export function getErrorUrl(request: Request): string {
    return `${request.protocol}://${request.hostname}/error`;
}
export function getUrlByLocale(request: Request): string {
    // TODO - Devolver la URL utilizando el locale
    return `${request.protocol}://${request.hostname}/sales`;
}
export function getRemoteAddres(request: Request): string {
    return request.connection.remoteAddress || request.socket.remoteAddress;
}

export function isPathInjectedByXSS(request: Request): boolean {
    const paths: string[] = split(request.path, '/');

    const pathsInjected: string[] = filter(paths, (path: string) => {
        return !isEqual(path, replace(decodeURI(path), '[^-A-Za-z0-9+&@#/%?=~_|!:,.;()]', ''));
    });

    return !isEmpty(pathsInjected);
}

export function isQueryInjectedByXSS(request: Request): boolean {
    const queryInjected: Object = pickBy(request.query, (value: string, key: string) => {
        return !isEqual(value, replace(decodeURI(value), '[^-A-Za-z0-9+&@#/%?=~_|!:,.;()]', ''));
    });

    return !isEmpty(queryInjected);
}

export function createRequestId() {
    let s = '';
    while (s.length < 10) {
        s += randomChar();
    }
    return s;
}

export function isHttps(request: Request): boolean {
    return isEqual(request.protocol, 'https');
}
