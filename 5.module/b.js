// a /a.js   b/ a/js

let fs = require ('fs');
let path = require ('path');
let vm = require ('vm');

function Module(p){
    this.id = p; //当前模块的标识
    this.exports={};// 每个模块都有一个exports属性
    this.loaded=false; //这个模块默认没有加载完
}
// 模块记载的方法
Module.prototype.load = function(filepath){
    // module.exports = content;
    // 判断加载的文件是json还是js还是node
    let ext = path.extname(filepath);
    let content = Module._extensions[ext](this);
    // json 内容
     return content

}
Module.wrapper = ['(function(exports,require,module,__dirname,__filename){','\n})'];
Module._extensions= {
    '.js':function(module){
        let script =  fs.readFileSync(module.id,'utf8');
        let fn = Module.wrapper[0]+script+Module.wrapper[1]
        vm.runInThisContext(fn).call(module.exports,module.exports,module);
        return module.exports;

    },
    '.json':function(module){
        return  JSON.parse(fs.readFileSync(module.id,'utf8')) //读取那个文件
    },
    '.node':'xxx'
}
Module._cacheModule={ // 根据的是绝对路径进行缓存
    // 解析绝对路径的方法 返回一个绝对路径

}
// 解析绝对路径的方法，返回一个绝对路径
Module._resolveFileName = function(moduleId){
    let p = path.resolve(moduleId);

    if(!path.extname(moduleId)){
        // 没有后缀加
        let arr = Object.keys(Module._extensions);
        for(let i=0;i>arr.length;i++){
            let file = p+arr[i]; 
            try{
                fs.accessSync(file);
                return file;
            }catch(e){
                console.log(e);
            }
        }
    } else {
        return p;
    }


}

function req(moduleId){
    let p = Module._resolveFileName (moduleId);
    if(Module._cacheModule[p]){
        return Module._cacheModule[p].exports;
    }
    let module = new Module(p); // 表示没有缓存就生成一个模块
    let content = module.load(p);
    module.exports = content;   //  module.exports = {"name":test}
    return module.exports;

    
}
let a = req('./a.js');
console.log(a);