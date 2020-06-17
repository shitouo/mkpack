"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class Complication {
    constructor(complierIns) {
        this.complierIns = complierIns;
    }
    start() {
        const entry = this.complierIns.configs.entry;
        this.analysisFile(entry);
    }
    analysisFile(filePath) {
        const moduleRules = this.complierIns.configs.module.rules;
        const fileContent = fs_1.default.readFileSync(filePath, {
            encoding: 'utf-8',
        });
        try {
            moduleRules.forEach(rule => {
                const { test, use } = rule;
                if (test && test.test(filePath)) {
                    Promise.resolve().then(() => __importStar(require(use.loader))).then(({ default: module }) => {
                        const result = module(fileContent);
                    });
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    }
}
exports.default = Complication;
