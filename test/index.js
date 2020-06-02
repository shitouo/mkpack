const Complier = require('../dist/Complier').default;
const config = require('./config');

const complierIns = new Complier(config);

complierIns.run();