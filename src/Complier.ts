import Complication from './Complication';
import fs from 'fs';

class Complier {
    configs: { entry: 'string' };
    constructor(configs: { entry: 'string' }) {
        this.configs = configs;
    }

    run() {
        // 运行入口
        const complication = new Complication(this);
        const entry = this.configs.entry;
    }
}

export default Complier;