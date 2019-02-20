//subcurry的思想是用类似bind函数实现的思想实现了将一个函数分成两半的效果(根据一次输入的参数的个数来分)
function subCurry(func){
    let args = Array.prototype.slice.call(arguments,1)
    return function(){
        //这是错误的，因为改变了args，但是args作为闭包保存所有的参数
        // args = [...args,...arguments]
        // return func.apply(this,args)
        return func.apply(this,[...args,...arguments])
    }
}

//扩展的subCurry
// function curry(func,length){
//     let len = length||func.length

//     return function(){
//         if(arguments.length < len){
//             return subCurry.apply(this,[func,...arguments])
//         }else{
//             return function(){
//                 return func.apply(this,arguments)
//             }
//         }
//     }
// }


//curry函数需要实现函数科利化，所以要递归调用，即当length未填满时，就使用subcurry对函数进行分割(二分)，然后将subcurry得到的函数递归传入curry
function curry(func,length){
    let len = length||func.length
    return function(){
        if(arguments.length < len){
            return curry(subCurry.apply(this,[func,...arguments]),len - arguments.length)
        }else{
            return func.apply(this,arguments)
        }
    }
}

//一句话实现，即每次返回函数的时候判断当前积累的参数值是否等于函数所有的参数个数，等于就返回函数执行结果，否则，组合参数并递归调用组合参数的函数(subcurry/judge)          
let beautyCurry = fn => judge = (...args) => args.length === fn.length?fn(...args):(...arg)=>judge(...args,...arg)



// function foo(a,b,c){
//     return a+b+c
// }

// let bar = beautyCurry(foo,3)
// console.log(bar(1)(2,3))



module.exports = {
    curry:curry
}