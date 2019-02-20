//给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。
function pow(base,exponent){
    let res = 1
    for(let i = 0;i!=Math.abs(exponent);i++){
        res = res * base
    }
    return exponent<0?1/res:res
}

console.log(pow(2.3,2))