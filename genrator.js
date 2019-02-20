let fs = require('fs')



function readFolder(path){
    return new Promise((resolve,reject)=>{
        fs.readdir(path,(err,files)=>{
            if(!err){
                resolve(files)
            }
        })
    })
}

function readFileStats(file){
    return new Promise((resolve,reject)=>{
        fs.stat(file,(err,stats)=>{
            if(!err){
                resolve(stats.isFile())
            }
        })
    })
}

//使用promise
// readFolder('/Users/zaka/Desktop/homework').then(files=>{
//     promises = []
//     for (const file of files) {
//         promises.push(readFileStats('/Users/zaka/Desktop/homework/'+file))
//     }
//     return promises
// }).then(promises=>{
//     return Promise.all(promises)
// }).then(values=>{
//     console.log(values)
// })


//使用async
// (async ()=>{
//     let files = await readFolder('/Users/zaka/Desktop/homework')
//     let results = []
//     for (const file of files) {
//         let status = await readFileStats('/Users/zaka/Desktop/homework/'+file)
//         results.push(status)
//     }
//     console.log(results)
// })()

//genrator自动执行
function* gen(){
    let files = yield readFolder('/Users/zaka/Desktop/homework')
    let results = []
    for (const file of files) {
        let status = yield readFileStats('/Users/zaka/Desktop/homework/'+file)
        results.push(status)
    }
    console.log(results)
}

//run函数主要的思路是，先获取到generator实例。然后递归执行，每一个递归包含：首先执行一次next并缓存当前result，
//根据result的done判断是否退出递归，当未退出递归时，使用result的value来获取值，即promise/callback，
//然后再递归调用next(当value是promise时，执行promise并在then中调用next，当value是callback时，直接把next传入callback即可)
function run(generator){
    let g = generator()

    //recursive
    function next(data){
        //这里需要使用result来缓存当前的next，切记不能一直使用g.next(data)，因为每当调用一次next就会在generator执行
        let result = g.next(data)
        if(result.done){
            return
        }
        let promise = result.value

        //当yield返回一个promise时按如下处理
        promise.then(data=>{
            next(data)
        })

        //如果yield返回的是一个回调函数()=>function(err，data){}
        // let callback = result.value
        // callback(next)

        //如果要对运行中的错误进行处理，就将整个run函数的执行放在一个promise中(除了第一句let g = generator())，有问题就reject，没有就resolve
    }
    next()
}

run(gen)

