function halfFind(array,target){
    //error
    if(!array||!target){
        return false
    }

    //递归边界
    if(array.length === 1&&array[0]!=target){
        return false
    }

    //logic
    let middle = Math.floor(array.length/2)

    if(array[middle] === target){
        return true
    }else if(array[middle] < target){
        return halfFind(array.slice(middle+1),target)
    }else if(array[middle] > target){
        return halfFind(array.slice(0,middle),target)
    }
}

console.log(halfFind([1,3,4,5,7,8,9],7))