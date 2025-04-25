"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function UpperCase(target, methodName, propertyDescriptor) {
    const original = propertyDescriptor.get;
    propertyDescriptor.get = function () {
        const r = original?.call(this);
        if (typeof r === "string") {
            return r.toUpperCase();
        }
        return r;
    };
}
class User {
    name;
    lastname;
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
    get fullName() {
        return `${this.name} ${this.lastname}`;
    }
}
__decorate([
    UpperCase
], User.prototype, "fullName", null);
const usser = new User("Jorge", "Gonzalez");
console.log(usser.fullName);
//# sourceMappingURL=01-getter-decorator.js.map