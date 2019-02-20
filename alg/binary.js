//输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。
function binary(n){
    //负数添加标志位补码表示(使用>>>带符号右移，移0位可以实现带符号位)
    if(n<0){
        n = n >>> 0
    }
    //注意这里如何给reduce添加初始值
    return n.toString(2).split('').reduce((acc,cur)=>cur === '1'?acc+1:acc,0)
}


function binary2(n){
    let flag = 1
    let count = 0
    while(flag){
        //通过与操作来判断当前flag对应为1的位在输入整数中是否为1
        if(n & flag){
            count++
        }
        flag = (flag << 1)
    }
    return count
}

console.log(binary2(-15))

//
//注意reduce还可以传入index
function parseCol(col){
    return col.toUpperCase().split('').reverse().reduce((acc,cur,idx)=>acc+Math.pow(26,idx)*(cur.charCodeAt()-64),0)
}

console.log(parseCol('AB'))