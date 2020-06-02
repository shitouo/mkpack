"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var Complication = /** @class */ (function () {
    function Complication(complierIns) {
        this.complierIns = complierIns;
    }
    Complication.prototype.start = function () {
        var entry = this.complierIns.configs.entry;
        this.analysisFile(entry);
    };
    Complication.prototype.analysisFile = function (filePath) {
        var fileContent = fs_1.default.readFileSync(filePath, {
            encoding: 'utf-8',
        });
        console.log(fileContent);
    };
    return Complication;
}());
exports.default = Complication;
