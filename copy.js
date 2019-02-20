let type = require('./type')

function shallowCopy(obj){
    let res = {}
    Object.keys(obj).forEach(key=>{
        res[key] = obj[key]
    })
    return res
}

// function deepCopy(obj){
//     let json = JSON.stringify(obj)
//     return JSON.parse(json)
// }

function deepCopy(obj){
    let res = {}
    Object.keys(obj).forEach(key=>{
        res[key] = typeof obj[key] == 'object'?deepCopy(obj[key]):obj[key]
    })
    return res
}

// let a ={a:1,b:'2',c:{d:3}}

// let b = deepCopy(a)

// b.c.d=4

// console.log(b)

// console.log(a)

function deepClone(target,obj){
    if(typeof obj != 'object'){
        return obj
    }
    if(target){
        Object.keys(obj).forEach(key=>{
            if(target[key]){
                typeof obj[key] == 'object'&&type.type(obj[key])!='array'?deepClone(target[key],obj[key]):target[key] =obj[key]
            }else{
                target[key] = typeof obj[key] == 'object'&&type.type(obj[key])!='array'?deepClone(null,obj[key]):obj[key]
            }
        })
    }else{
        let res = {}
        Object.keys(obj).forEach(key=>{
            res[key] = typeof obj[key] == 'object'&&type.type(obj[key])!='array'?deepClone(null,obj[key]):obj[key]
        })
        return res
    }
}

function extend(target){
    objs = Array.prototype.slice.call(arguments,1)
    for (const obj of objs) {
        deepClone(target,obj)
    }
    return target
}

var obj1 = {
    a: 1,
    b: {
        c: 2
    }
}

var obj2 = {
    b: {
        c: [5],

    }
}

let a ={a:1,b:'2',c:{d:3}}
let b ={param:100}
let c = {test:'hello',c:{s:6}}

console.log(extend(obj1,obj2))