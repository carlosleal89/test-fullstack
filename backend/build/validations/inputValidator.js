"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const schemas_1 = require("./schemas");
const validateUser = (name, email, phone, status) => {
    const options = {
        abortEarly: false, // show all the error messages, not only the first one
    };
    const { error } = schemas_1.createUserValidator.validate({ name, email, phone, status }, options);
    if (error) {
        return { status: 'INVALID_DATA', message: error.message };
    }
};
exports.validateUser = validateUser;
