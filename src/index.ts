import { SyncHook } from 'tapable';
import Complier from './Complier';
import configs from '../config';

// 生成complier对象，来存储config.js中的配置
let complier: Complier;
complier = new Complier(configs);

complier.run();