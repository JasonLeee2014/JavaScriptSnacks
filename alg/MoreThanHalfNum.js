//数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。
function MoreThanHalfNum(arr){
    //error
    if(!arr || arr.length<=0){
        return 0
    }

    //logic theta(n)
    let currVal = arr[0]
    let count = 1

    for (const item of arr.slice(1)) {
        //遍历 遇到相同的计数加一，不同减一 当count为0时curVal变换并置count为1
        //所以如果某个数出现的次数超过了一半，则遇到所用不同减去计数后 不管怎么样 count都是大于等于1的
        if(count === 0){
            currVal = item
            count = 1
        }else{
            if(item === currVal){
                count++
            }else{
                count--
            }
        }
    }

    return count>=1?currVal:0
}

console.log(MoreThanHalfNum([1,2,2,2,2,2,4,5,3]))