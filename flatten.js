let type = require('./type').type

function flatten(array){
    let result = []
    for (const item of array) {
        if(Array.isArray(item)){
            result = result.concat(flatten(item))
        }else{
            result.push(item)
        }
    }
    return result
}

function flatten3(array){
    return Array.isArray(array)?array.reduce((acc,curr)=>[...acc,...flatten3(curr)],[]):[array]
}

//上面两种方法都是基于遍历，遇到数组就递归处理的思路
//但是一个用for循环 一个使用reduce
//一个使用concat来展开与拼接数组[A,[B]] A.concat(B)
//一个使用扩展运算符 [...A,...B]
//本质是相同的，此时A代表的是B前面的元素组成的数组，因此可见对这类方法都需要遍历

function flatten2(array){
    while(array.some(item=>Array.isArray(item))){
        array = [].concat(...array)
    }
    return array
}

var arr = [1, [2, [3, 4]]]

//上面方法是每次都把一个层级的打开放在一起 直到没有第二层的数组
//这种方法利用...展开，再用concat拼接，相当于...array成了几个数组，如何利用concat 是元素的就直接放进去，是数组的就展开一层再放进去

console.log(flatten3(arr))