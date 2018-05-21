let fs = require('fs');

let path = require('path');

// let a  = path.join('a','/b');
// console.log(a);

let  dirs = fs.readdirSync('c');
console.log(dirs);
// fs.unlinkSync();

dirs = dirs.map(item=>path.join('c',item));

console.log(dirs,'ss');


dirs.forEach(p=>{
    let stat = fs.statSync(p);

    if(stat.isDirectory()){
        fs.rmdirSync(p);
    } else {
        fs.unlinkSync(p);
    }
});



console.log(dirs);



function next(dir,cb){

}

fs.rmdirSync('a/b/c/d/e/f');

fs.mkdirSync('cb');