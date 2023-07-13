"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsuarioEntity {
    name;
    secondName;
    lastName;
    secondLastName;
    phone;
    address;
    mail;
    doc;
    genero;
    acudiente;
    constructor(name, secondName, lastName, secondLastName, phone, address, mail, doc, genero, acudiente) {
        this.name = name;
        this.secondName = secondName;
        this.lastName = lastName;
        this.secondLastName = secondLastName;
        this.phone = phone;
        this.address = address;
        this.mail = mail;
        this.doc = doc;
        this.genero = genero;
        this.acudiente = acudiente;
    }
}
exports.default = UsuarioEntity;
