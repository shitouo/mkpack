import Complication from './Complication';
import fs from 'fs';
import path from 'path';
import acorn from 'acorn';

class Complier {
    configs: { entry: string, modules: { rules: Array<object> } };
    constructor(configs: { entry: string, modules: { rules: Array<object> } }) {
        this.configs = configs;
    }

    run() {
        // 这里暂时，调用一次run，执行一次编译。
        // 后面再改为监听文件变化，动态执行
        // 运行入口
        const complication = new Complication(this);
        complication.start();
    }
}

export default Complier;