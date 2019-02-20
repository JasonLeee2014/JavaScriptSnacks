//输入一个字符串,按字典序打印出该字符串中字符的所有排列。例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
//全排列
function printString(str){
    //error
    if(!str){
        return
    }
    if(str.length<=1){
        return [str]
    }

    //logic
    let strArray = Array.from(str)

    let res = []

    //本题的逻辑是利用递归 最终的结果是固定第一个字符后，后面的子串递归得到排列的所有结果数组，然后结合第一个字符组成所有的排列数组。
    //其中递归的结束条件是输入的字符就一个时就只返回一个元素的数组
    //同时，第一个元素的列举通过一个for循环实现，每次都将第一个字符依次与之后的每个字符交换，从而实现第一个字符的枚举，注意要记得最后交换了在下一次交换前要恢复原样
    for(let i=0;i!=strArray.length;i++){
        let temp = strArray[0]
        strArray[0] = strArray[i]
        strArray[i] = temp
        //recursive logic
        let remains = printString(Array.prototype.slice.call(strArray,1).join(''))
        for (const item of remains) {
            res.push(strArray[0] + item)
        }

        temp = strArray[0]
        strArray[0] = strArray[i]
        strArray[i] = temp
    }
    return res
}

//全组合
function printCouple(str){
    let strArray = Array.from(str)
    let res = []

    function printWithCoupleLength(strArray,coupleLength){
        //递归退出条件 2个
        //当输入的字符数组与最后指定的组合长度一样时 就只有一种 就是全部组合在一起
        if(strArray.length == coupleLength){
            return [strArray.join('')]
        }
        //当指定的输出的组合长度为1时，就是整个输入字符数组为返回
        if(coupleLength == 1){
            return strArray
        }
        let res = []
        //递归逻辑
        //要第一个字符，加上后面的中找指定组合长度-1的组合数组
        //或者不要第一个字符 加上后面的中找指定组合长度的组合数组
        for (const item of printWithCoupleLength(strArray.slice(1),coupleLength - 1)) {
            res.push(strArray[0]+item)
        }
        for (const item of printWithCoupleLength(strArray.slice(1),coupleLength)) {
            res.push(item)
        }
        //返回整合好的结果
        return res
    }

    for(let coupleLength = 1;coupleLength<=str.length;coupleLength++){
        res = res.concat(printWithCoupleLength(strArray,coupleLength))
    }

    return res
}

console.log(printCouple('abc'))