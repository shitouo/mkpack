"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function loader(source) {
    return `${JSON.stringify(source)} // this is mukai's file`;
}
exports.default = loader;
