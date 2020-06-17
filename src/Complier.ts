import Compilation from './Compilation';
import fs from 'fs';
import path from 'path';
import acorn from 'acorn';

interface ruleInterface {
    test?: RegExp;
    use: {
        loader: string;
    }
}
interface configsInterface {
    entry: string;
    module: {
        rules: ruleInterface[]
    }
}
class Complier {
    configs: configsInterface;
    constructor(configs: configsInterface) {
        this.configs = configs;
    }

    run() {
        // 这里暂时，调用一次run，执行一次编译。
        // 后面再改为监听文件变化，动态执行
        // 运行入口
        const compilation = new Compilation(this);
        compilation.start();
    }
}

export default Complier;