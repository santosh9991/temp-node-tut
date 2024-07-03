const path = require('path');
console.log(path.sep);
const filepath = path.join('/content','subfolder','text.txt');
console.log('filename', filepath);
const base = path.basename(filepath);
console.log('base', base);
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolute);