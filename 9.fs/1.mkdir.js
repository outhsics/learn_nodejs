let fs = require('fs');


// function makep2(p){ //make -p /a/b/c
//     let dirs = p.split('/');
//     for(let i =0;i<dirs.length;i++){
//         console.log(dirs);
//         let p = dirs.slice(0,i+1).join('/');
//         console.log(p);
//         try{

//             fs.accessSync(p)
//         }catch(e){
//             console.log(e)
//             fs.mkdir(p);
//         }
//     }

// }


function makep(dir,cb){ 
    let dirs = dir.split('/');
    console.log(dirs);
    let index = 1;
    function next(index){
            if(index-1 === dir.length) return cb();

            let p = dirs.slice(0,index).join('/');
            console.log(p,'o');
            fs.access(p,(err)=>{
                if(!err){
                    next(index+1)
                }else {
                    // 
                    fs.mkdir(p,(err)=>{
                        // console.log(err);
                        next(index+1);
            
                    });
                }
            })
            
        }
        next(index);
};

makep('a/b/c/d/e/f',()=>{
console.log('ok');

})
