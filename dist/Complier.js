"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Complication_1 = __importDefault(require("./Complication"));
var Complier = /** @class */ (function () {
    function Complier(configs) {
        this.configs = configs;
    }
    Complier.prototype.run = function () {
        // 这里暂时，调用一次run，执行一次编译。
        // 后面再改为监听文件变化，动态执行
        // 运行入口
        var complication = new Complication_1.default(this);
        complication.start();
    };
    return Complier;
}());
exports.default = Complier;
