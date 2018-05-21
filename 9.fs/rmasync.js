let fs = require('fs');

let path = require('path');


function removeDir(dir){
    return new Promise((resolve,reject)=>{
        fs.stat(dir,(err,stat)=>{

            if(stat.isDirectory()){
                fs.readdir(dir,(err,dirs)=>{
                    dirs = dirs.map(d=>path.join(dir,d)) // [b/c,b/d]
                    dirs = dirs.map (p=>removeDir(p));  //[promise,promise] 
                    // removeDir();
                    Promise.all(dirs).then(()=>{
                        fs.rmdir(dir,resolve);
                    });
                    
                });

            }else {
                fs.unlink(dir,resolve);
                // Promise success
            }
        })

    })
}

removeDir('a').then(data=>{

})