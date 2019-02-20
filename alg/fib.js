//大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项。n<=39
function fib(n){
    if(n<=2){
        return n-1
    }
    return fib(n-1) + fib(n-2)
}
//使用递归实现，效率低，因为会有很多重复计算如：算fib(9)就要算fib(8)和fib(7)，但是算fib(8)又要算fib(7)，是指数时间复杂度

function fib2(n){
    if(n === 1){
        return 0
    }
    if(n === 2){
        return 1
    }
    let temp = 0,a = 0,b = 1
    for(let i = 3;i<=n;i++){
        temp = a + b
        a = b
        b = temp
    }
    return temp
}
//使用迭代，其思想是减少重复计算，因此从fib(1)fib(2)一直迭代算到结果为止，是O(n)复杂度

console.log(fib2(5))
