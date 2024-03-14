"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mapStatusHTTP(status) {
    switch (status) {
        case 'SUCCESSFUL': return 200;
        case 'CREATED': return 201;
        case 'INVALID_REQUEST': return 400; // Bad Request
        case 'UNAUTHORIZED': return 401;
        case 'NOT_FOUND': return 404;
        case 'CONFLICT': return 409;
        case 'INVALID_DATA': return 422; // Unprocessable Entity
        case 'INTERNAL_SERVER_ERROR': return 500;
        default: return 500;
    }
}
exports.default = mapStatusHTTP;
