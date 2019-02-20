//bubble sort
function bubbleSort(array){
    let len = array.length
    for(let i = 0; i!=len; i++){
        for(let j = 0; j!=len-i-1; j++){
            if(array[j]>array[j+1]){
                [array[j+1],array[j]] = [array[j],array[j+1]]
            }
        }
    }
    return array
}

//improved buuble sort
function bubbleSort2(array){
    console.time('bubble sort2')
    let len = array.length
    let i = len - 1
    //确保下面这段代码只在还存在逆序对的时候执行
    while(i>0){
        let farest_exchange = 0
        for(let j = 0;j!=i;j++){
            if(array[j]>array[j+1]){
                [array[j+1],array[j]] = [array[j],array[j+1]]
                farest_exchange = j
            }
        }
        i = farest_exchange
    }
    console.timeEnd('bubble sort2')
    return array
}

//mergeSort
function mergeSort(array){
    let len = array.length
    if(len<=1){
        return array
    }
    let middle = Math.floor(len/2)
    let array1 = Array.prototype.slice.call(array,0,middle)
    let array2 = Array.prototype.slice.call(array,middle,len)
    return merge(mergeSort(array1),mergeSort(array2))
}

//merge-recusive(using if)
function merge(array1,array2){
    let result = []
    if(array1.length && array2.length){
        result = [array1[0]<array2[0]?Array.prototype.shift.call(array1):Array.prototype.shift.call(array2),...merge(array1,array2)]
        return result
    }

    if(array1.length){
        return array1
    }

    if(array2.length){
        return array2
    }

    return result
}

//merge-iterative(using while)
function merge2(array1,array2){
    let result = []
    while(array1.length&&array2.length){
        if(array1[0]<array2[0]){
            result.push(array1.shift())
        }else{
            result.push(array2.shift())
        }
    }

    if(array1.length){
        result = [...result,...array1]
    }

    if(array2.length){
        result = [...result,...array2]
    }

    return result
}

//insertSort(double for)
function insertSort(array){
    let len = array.length
    for(let i = 1;i!=len;i++){
        let elm = array[i]
        for(let j = i;j>=0;j--){
            if(elm<array[j-1]){
                array[j] = array[j-1]
            }else{
                array[j] = elm
                break
            }
        }
    }
    return array
}


//selectionSort
function selectionSort(array){
    let len = array.length
    for(let i=0;i!=len-1;i++){
        let min_index = i
        let min = array[min_index]
        //因为假定第一个是最小的，所以j从i+1开始
        for(let j=i+1;j!=len;j++){
            if(array[j]<min){
                min = array[j]
                min_index = j
            }

        }
        [array[i],array[min_index]] = [array[min_index],array[i]]
    }
    return array
}

//quickSort
function quickSort(array){
    let len = array.length
    //牢记对于递归需要边界条件来退出递归
    if(len<=1){
        return array
    }
    let pivot = len-1
    let left = []
    let right = []
    for(let i =0;i!=len-1;i++){
        if(array[i]<array[pivot]){
            left.push(array[i])
        }else{
            right.push(array[i])
        }
    }
    return [...quickSort(left),array[pivot],...quickSort(right)]
}

//countingSort
function countingSort(array){
    let len = array.length
    if(len<=0){
        return array
    }
    let externalArray = []
    let result = []

    //三大步骤
    //计数
    let min, max
    min = max = array[0]
    for(let i=0;i!=len;i++){
        min = min <= array[i] ? min : array[i];
        max = max >= array[i] ? max : array[i];
        if(!externalArray[array[i]]){
            externalArray[array[i]] = 1
        }else{
            externalArray[array[i]] += 1
        }
    }

    //累加计数-每个数对应的值是其应该在的位置+1
    for(let i = min;i!=max;i++){
        externalArray[i+1] = (externalArray[i]||0) + (externalArray[i+1]||0)
    }


    //反向填充-找到原数组中每一个元素现在应该在的位置(根据第二步),然后填充，同时(对于相同元素)更新位置
    for(let i = len-1;i>=0;i--){
        result[externalArray[array[i]]-1] = array[i]
        externalArray[array[i]]--
    }

    return result
}

//bucketSort
function bucketSort(array){
    let len = array.length
    let buckets = []

    let space = 5

    for(let i = 0 ;i!=len;i++){
        if(!buckets[Math.floor(array[i]/5)]){
            buckets[Math.floor(array[i]/5)] = []
        }
        buckets[Math.floor(array[i]/5)].push(array[i])
    }

    let result = []
    for(let i=0;i!=buckets.length;i++){
        if(!buckets[i]){
            buckets[i]=[]
        }
        buckets[i] = countingSort(buckets[i])

        result = [...result,...buckets[i]]
    }

    return result
}

//shellSort
//while+3for(for gap,for i,reverse for insert sort)
function shellSort(array){
    let len = array.length
    let gap = 1
    let temp
    let space = 3

    //这里小于len/space是为了确保下次gap增加时产生的新的gap不超过len，(这一步是在计算最大的gap是好大，以后每次gap就除以space来得到之后的gap)
    while(gap<len/space){
        gap = gap * space + 1
    }

    for(gap;gap>0;gap = Math.floor(gap/space)){
        //从i=gap是因为这是除了第一个元素(对不同的序列，array中的0到gap-1是这些不同序列的第一个元素)之后的第二个元素，对只有一个元素的不需要插入排序
        for(let i = gap;i!=len;i++){
            temp = array[i]
            //从i-gap开始是因为默认将当前元素i与之前的元素比较
            for(var j=i-gap;j>=0&&array[j]>temp;j-=gap){
                array[j+gap] = array[j]
            }
            array[j+gap] = temp
        }
    }

    return array
}
// test
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.time('sort')
console.log(shellSort(arr))
console.timeEnd('sort')
