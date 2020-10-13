import { Response, Request } from 'express';

export function getHeadersAsString(request: Request): string {
    return JSON.stringify(request.headers);
}

export function getCommonHeaders(request: Request): {} {
    return {
        'x-requestid': request.get('x-requestid') || '',
    };
}

// no-cache
export function getNoCacheHeader(request: Request): string {
    return request.get('cache-control');
}

// Request ID
export function setRequestIdHeader(response: Response, requestId: string): void {
    response.setHeader('x-requestid', requestId);
}
export function getRequestIdHeader(response: Response): string {
    return response.getHeader('x-requestid');
}
