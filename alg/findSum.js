//小明很喜欢数学,有一天他在做数学作业时,要求计算出9~16的和,他马上就写出了正确答案是100。但是他并不满足于此,他在想究竟有多少种连续的正数序列的和为100(至少包括两个数)。没多久,他就得到另一组连续正数和为100的序列:18,19,20,21,22。现在把问题交给你,你能不能也很快的找出所有和为S的连续正数序列? Good Luck!
//输入一个递增排序的数组和一个数字S，在数组中查找两个数，是的他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。
function findSum(array,target){
    //error
    if(!target||!array||array.length<2){
        return
    }

    //logic
    let index = 0
    for(let i=0;i!=array.length;i++){
        index = i
        if(array[i]>target){
            break
        }
    }
    let i = 0
    let j = index - 1
    while(array[i]+array[j]!=target&&i<j){
        if(array[i]+array[j]<target){
            i++
        }else if(array[i]+array[j]>target){
            j--
        }
    }

    return {i,j}
}

function findSquenceSum(target){
    //error
    if(!target){
        return
    }

    //logic
    let small = 1
    let big = 2

    function getSum(from,to){
        let result = 0
        for(let i = from;i<=to;i++){
            result+=i
        }
        return result
    }

    function print(from,to){
        let result = new Array(to - from + 1)
        result.fill(NaN)
        return result.map((_,i)=>i+from).join('+')
    }
    while(small < target/2){
        let sum = getSum(small,big)
        if(sum===target){
            console.log(print(small,big))
            big++
        }else if(sum > target){
            small++
        }else if(sum < target){
            big++
        }
    }
}

let arr = [1,2,4,7,10,11,15,16,17]
console.log(findSum(arr,15))

findSquenceSum(100)