//给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],其中B中的元素B[i]=A[0]A[1]...A[i-1]A[i+1]...A[n-1]。不能使用除法。


//该算法思想是 比如算数组中第i个的值，先用result数组，其中第i个是前i-1个元素的积，等result填好第一遍之后，再从result的倒数第二个开始向前更新最终的result值
//不从倒数第一个开始是因为倒数都一个已经算好了，就是前面所有元素的积。
//用一个累计变量来保存从i+1到最后一个元素的积，每次迭代就往前再乘一个，然后把0~i-1的积与i+1~n的积相乘即可
function multiply(array){
    if(!array || !array.length){
        return [];
    }
    var result = [];
    var len1 = array.length, len2 = result.length;
    result[0] = 1;
    for(var i = 1; i < len1; i++){
        result[i] = array[i - 1] * result[i - 1];
    }
    var temp = 1;
    for(var i = len1 - 2; i >= 0;--i){
        temp *=array[i + 1];
        result[i] *= temp
    }
    return result;
}

//该算法使用了辅助空间
function multiply2(array){
    //error
    if(!array||!array.length){
        return []
    }

    //logic
    let res = []
    for(let i=0;i!=array.length;i++){
        let temp = array.concat()
        temp[i] = 1
        res[i] = temp.reduce((acc,curr)=>acc*curr,1)
    }
    return res
}

console.log(multiply([1,2,3,4]))