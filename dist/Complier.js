"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Complication_1 = __importDefault(require("./Complication"));
var fs_1 = __importDefault(require("fs"));
var Complier = /** @class */ (function () {
    function Complier(configs) {
        this.configs = configs;
    }
    Complier.prototype.run = function () {
        // 运行入口
        var complication = new Complication_1.default(this);
        var entry = this.configs.entry;
        this.analysisFile(entry);
    };
    Complier.prototype.analysisFile = function (filePath) {
        // 解析单个文件
        console.log('filePath', filePath);
        var fileContent = fs_1.default.readFileSync(filePath, { encoding: 'utf-8' });
        console.log(fileContent);
    };
    return Complier;
}());
exports.default = Complier;
