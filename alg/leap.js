//一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
//实际上就是斐波那契，唯一与斐波那契不同的是初始值不同，一个是0 1 一个是1 2
//我们可以用21的小矩形横着或者竖着去覆盖更大的矩形。请问用n个21的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？(与这个问题一模一样)
function leap(n){
    if(n === 1){
        return 1
    }
    if(n === 2){
        return 2
    }
    return leap(n-1) + leap(n-2)
}

// function fib(n){
//     if(n === 1){
//         return 0
//     }
//     if(n === 2){
//         return 1
//     }
//     return leap(n-1) + leap(n-2)
// }


//同样可以使用迭代，因为可以考虑成总的走法=最后一次跳1级的走法+最后一次跳2级的走法，所以可以迭代相加
function leap2(n){
    if(n===0){
        return 0
    }
    if(n===1){
        return 1
    }
    if(n===2){
        return 2
    }
    let temp = 0,a = 1,b = 2
    for(let i = 3;i<=n;i++){
        temp = a + b
        a = b
        b = temp
    }
    return temp
}

console.log(leap2(5))