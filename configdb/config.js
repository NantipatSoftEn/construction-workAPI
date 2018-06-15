const type = 'construction-work';
/* server
    production: node
    develop: dev
*/
// exports.server = type === 'dev' ? 'dev' : 'node';
exports.server = type;
exports.username = 'root';
exports.password = '';
/* port
    production: 3000,
    develop: 7000
*/
exports.port = type === 'dev' ? 7000 : 3000;