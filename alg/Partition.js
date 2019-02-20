//partition & quick sort
function Partition(array,start,end){
    //error
    if(!array||start<0||end<0||start>end){
        return null
    }
    if(start === end){
        return start
    }

    //logic
    function swap(array,index1,index2){
        //error
        if(index1<0||index2<0||index1>=array.length||index2>=array.length||!array){
            return null
        }

        let temp = array[index1]
        array[index1] = array[index2]
        array[index2] = temp
    }

    //取最后一个元素为pivot
    let pivot = array[end]

    //主要逻辑是 遍历元素，把所有比pivot小的按照small这个index依次排列
    let small = start - 1
    for(let i=start;i<end;i++){
        //找到比pivot小的
        if(array[i] < pivot){
            //排在上一个small的后面
            small++
            //这里判断是为了减少交换操作，因为如果相同相当于位置不变
            if(small != i){
                swap(array,small,i)
            }
        }
    }
    //最后small的后一个与pivot交换即可
    small++
    swap(array,small,end)
    return small
} 

module.exports = {
    Partition,
}

function quickSortUsingPartition(array,start,end){
    if(start >= end){
        return
    }
    let middleIndex = Partition(array,start,end)
    quickSortUsingPartition(array,start,middleIndex-1)
    quickSortUsingPartition(array,middleIndex+1,end)
}

let arr = [5,2,4,7,0,8,9,3,1,6]
quickSortUsingPartition(arr,0,arr.length-1)
console.log(arr)