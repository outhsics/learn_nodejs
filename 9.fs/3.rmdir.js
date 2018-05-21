let fs = require('fs');

let path = require('path');


function removeDirSync(dir) {

    // 
    let stat = fs.statSync(dir);
    // console.log(stat);


    if(stat.isDirectory()){
        let dirs = fs.readdirSync(dir);

        console.log(dirs);

        dirs = dirs.map(d=>path.join(dir,d)); // [c/a,c/b]
        console.log(dirs,'ddd');

        
        dirs.forEach(d => {
            removeDirSync(d);
        });
        fs.rmdirSync(dir);

    }else {
        fs.unlinkSync(dir);
    }

}

removeDirSync('a');