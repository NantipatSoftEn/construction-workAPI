const type = 'construction_work';
/* server
    production: node
    develop: dev
*/
// exports.server = type === 'dev' ? 'dev' : 'node';
exports.server = type;
exports.username = 'root';
exports.password = 'root';
/* port
    production: 3000,
    develop: 7000
*/
exports.port = type === 'dev' ? 7000 : 3000;