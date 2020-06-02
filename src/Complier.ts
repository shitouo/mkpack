import Complication from './Complication';
import fs from 'fs';
import path from 'path';
import acorn from 'acorn';

class Complier {
    configs: { entry: string };
    constructor(configs: { entry: string }) {
        this.configs = configs;
    }

    run() {
        // 运行入口
        const complication = new Complication(this);
        const entry = this.configs.entry;
        this.analysisFile(entry);
    }

    analysisFile(filePath: string) {
        // 解析单个文件
        console.log('filePath', filePath);
        const fileContent = fs.readFileSync(filePath, {encoding: 'utf-8'});
        console.log(fileContent);
    }
}

export default Complier;