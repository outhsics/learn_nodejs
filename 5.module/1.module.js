let fs = require('fs');
//isexists
fs.accessSync('./1.txt');



let path=require('path');
// resolve join basename extname...



// console.log(path.resolve('./2.txt','./','a','b'));
// console.log(path.join(__dirname,'..','/','a','b'));



// console.log(path.extname('1.a.b.js'));
console.log(path.basename('1.a.b.js','.b.js'));
// console.log(path.posix.sep); // 路径分隔符 \ /
console.log(path.delimiter); // 环境分隔符 \ /

console.log(__filename);

/**
 * (function(exports,require,module,__dirname,__filename)){
 *  filecontent
 * }()
 */

 let vm = require('vm');
//  let a = 'test' 
 vm.runInthisContext(`console.log(a)`)//sandbox
//  let a = 'test' 
//  eval('console.log(a)'); 
console.log(global);

// console.dir(global,{showHidden:true}); //eval也是global属性
// Object.defineProperty();