"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Compilation_1 = __importDefault(require("./Compilation"));
class Complier {
    constructor(configs) {
        this.configs = configs;
    }
    run() {
        // 这里暂时，调用一次run，执行一次编译。
        // 后面再改为监听文件变化，动态执行
        // 运行入口
        const compilation = new Compilation_1.default(this);
        compilation.start();
    }
}
exports.default = Complier;
