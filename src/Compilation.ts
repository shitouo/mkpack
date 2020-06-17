import Complier from './Complier';
import fs from 'fs';
import acorn from 'acorn';
export default class Compilation {
    complierIns: Complier
    constructor(complierIns: Complier) {
        this.complierIns = complierIns;
    }

    start() {
        const entry = this.complierIns.configs.entry;
        this.analysisFile(entry);
    }

    analysisFile(filePath: string) {
        const moduleRules = this.complierIns.configs.module.rules;
        const fileContent = fs.readFileSync(filePath, {
            encoding: 'utf-8',
        });
        // 执行所有的loader
        try {
            let result: string = fileContent;
            moduleRules.reverse().forEach(rule => {
                const { test, use } = rule;
                if (test && test.test(filePath)) {
                    import(use.loader).then(({default: module}) => {
                        result = module(result);
                    });
                }
            });
        } catch(e) {
            console.log(e);
        }
        // 寻找依赖
        
    }
}