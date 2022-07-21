const path = require('path')

const fPath = '/a/b/c/d/index.html';
const fullName = path.basename(fPath);

console.log(fullName);

const nameWithOutExt = path.basename(fPath, '.html');
console.log(nameWithOutExt);

const nameWithExt = path.extname(fPath);
console.log(nameWithExt);