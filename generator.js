let fs = require('fs')


//callback
// let readFolder = function(path){
//     let res = []

//     let getStats = function(files,index){
//         fs.stat('/Users/zaka/Desktop/DP/'+files[index],(err,stat)=>{
//             if(!err){
//                 res.push(stat.isDirectory())
//                 index++
//                 if(files.length > index){
//                     getStats(files,index)
//                 }else{
//                     console.log(res)
//                 }
//             }
//         })
//     }

//     fs.readdir(path,(err,files)=>{
//         if(!err){
//             console.log(files)
//             getStats(files,0)
//         }
//     })
// }

//promise
let readFolder = function(path){
    return new Promise((resolve,reject)=>{
        fs.readdir(path,(err,files)=>{
            if(!err){
                resolve(files)
            }else{
                reject(err)
            }
        })
    })
}

let getStats = function(filePath){
    return new Promise((resolve,reject)=>{
        fs.stat(filePath,(err,stats)=>{
            if(!err){
                resolve(stats)
            }else{
                reject(err)
            }
        })
    })
}

// readFolder('/Users/zaka/Desktop/DP/')

//promise
// readFolder('/Users/zaka/Desktop/DP/').then((files)=>{
//     let res = []
//     let promise
//     for (const file of files) {
//         if(promise){
//             promise = promise.then((stats)=>{
//                 res.push(stats.isDirectory())
//                 return getStats('/Users/zaka/Desktop/DP/'+file)
//             })
//         }else{
//             promise = getStats('/Users/zaka/Desktop/DP/'+file)
//         }
//     }
//     promise.then((stats)=>{
//         res.push(stats.isDirectory())
//         console.log(res)
//     })
// })

//async
// let read = async function(path){
//     let res = []
//     let files = await readFolder(path)
//     for (const file of files) {
//         let stats = await getStats(path+file)
//         res.push(stats.isDirectory())
        
//     }
//     console.log(res)
// }

// read('/Users/zaka/Desktop/DP/')

//generator
function* gread(path){
    let res = []
    let files = yield readFolder(path)
    for (const file of files) {
        let stats = yield getStats(path+file)
        res.push(stats.isDirectory())
    }
    console.log(res)
}

function run(generator){
    let item = generator.next()

    function process(item){
        if(!item.done){
            let p = item.value
            p.then(data => {
                process(generator.next(data))
            })
        }
    }

    process(item)
}



run(gread('/Users/zaka/Desktop/DP/'))