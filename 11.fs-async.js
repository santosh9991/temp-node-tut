const { readFile, writeFile} = require('fs');
readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log('err', err);
        return
    }
    const first =result;
    readFile('./content/second.txt','utf8', (err, result)=>{
        if(err){
            console.log('error in second', err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt',`Here is the result: ${first} ${second}`,(err, result)=>{
            if(err){
                console.log('errr');
                return
            }
            console.log('result', result);
        })
    })


})