let {Partition} = require('./Partition')

//输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4。

//利用Patition θ(n)
//牢记partition函数本身不是一个递归函数，因此往往需要先用一个递归函数来包装partition函数，同时将递归的退出条件加入这个递归函数中
//最后用一个函数来调用递归函数- 与利用partition进行快排类似
function GetLeastNumbers(array,n){
    //error
    if(!array||n<=0||array.length<n){
        return null
    }

    function recursiveFn(array,targetIndex,start,end){
        let index = Partition(array,start,end)
        if(index == targetIndex){
            //递归结束的条件
            return
        }else if(index > targetIndex){
            recursiveFn(array,targetIndex,start,index-1)
        }else if(index < targetIndex){
            recursiveFn(array,targetIndex,index+1,end)
        }
    }

    recursiveFn(array,n-1,0,array.length-1)

    return array.slice(0,n)
}

function GetLeastNumbers2(array,n){
    //这里的res☝️使用最大堆或者红黑树实现
    let res = []

    function addToRes(item){
        if(res.length === n){
            let max = Math.max(...res)
            if(item < max){
                res[res.indexOf(max)] = item
            }
        }else{
            res.push(item)
        }
    }

    for (const item of array) {
        addToRes(item)
    }

    return res
}

let array = [1,5,6,2,4,7,8,3,9,10,11,0,14,30]
console.log(GetLeastNumbers2(array,7))
