"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCpf = void 0;
function validateCpf(req, res, next) {
    let { cpf } = req.body;
    if (!cpf) {
        return res.status(400).json({
            message: 'Todos os campos devem ser preenchidos.',
        });
    }
    cpf = cpf.replace(/[^\d]/g, ''); // Remove non numerical chars
    const cpfRegex = /^(\d)\1+$/;
    if (cpf.length !== 11) {
        return res.status(400).json({
            message: 'Formato inválido do CPF.',
        });
    }
    if (cpfRegex.test(cpf)) {
        return res.status(400).json({
            message: 'Formato inválido do CPF.',
        });
    }
    next();
}
exports.validateCpf = validateCpf;
