//FindGreatestSumOfSubArray

//动态规划
//其中FindGreatestSumOfSubArrayEndWithIndex(array,index)表示以array[index]结尾的子数组的最大和
function FindGreatestSumOfSubArray(array){
    //error
    if(!array){
        return 0
    }

    //这里实际就是循环实现中的sum
   function FindGreatestSumOfSubArrayEndWithIndex(array,index){
       if(index === 0 || FindGreatestSumOfSubArrayEndWithIndex(array,index - 1) <= 0){
           return array[index]
       }else if(index!=0 && FindGreatestSumOfSubArrayEndWithIndex(array,index - 1) > 0){
           return FindGreatestSumOfSubArrayEndWithIndex(array,index - 1) + array[index]
       }
   }

   //找到以哪一个数结尾的子数组的和最大 实际就是循环实现方法中的maxSum
   let res = -Infinity
   for (let i = 0;i!=array.length-1;i++) {
       res = res < FindGreatestSumOfSubArrayEndWithIndex(array,i)?FindGreatestSumOfSubArrayEndWithIndex(array,i):res
   }
   return res
}


//用循环实现动态规划
//往往用循环的方式 先算后面会用到的，比如先算f(i-1)再算f(i)
function FindGreatestSumOfSubArray2(array){
    //error
    if(!array){
        return 0
    }

    //logic
    let sum = 0
    let maxSum = 0
    for(let i=0;i!=array.length-1;i++){
        if(sum<=0){
            sum = array[i]
        }else{
            sum = sum + array[i]
        }

        if(maxSum<sum){
            maxSum = sum
        }
    }
    return maxSum
}

console.log(FindGreatestSumOfSubArray2([6,-3,-2,7,-15,1,2,2]))
