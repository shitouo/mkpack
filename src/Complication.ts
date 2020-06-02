import Complier from './Complier';
import fs from 'fs';
import acorn from 'acorn';
export default class Complication {
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

    }
}