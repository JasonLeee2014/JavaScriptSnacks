//在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
function find2d(target,array){
    let rowCount = array.length - 1
    let i,j
    //牢记需要初始化i和j
    for(i = rowCount, j = 0;i>=0 && j!=array[i].length;){
        if(array[i][j] === target){
            return true
        }else if(array[i][j] < target){
            j++
        }else if(array[i][j] > target){
            i--
        }
    }
    //可以从左下角和右上角开始，这两个情况下，如果目标比当前值小，就往上或者往左，否则往下或者往右
    // for(i = 0,j = array[i].length-1;i<=rowCount && j>=0;){
    //     if(array[i][j] === target){
    //         return true
    //     }else if(array[i][j] < target){
    //         i++
    //     }else if(array[i][j] > target){
    //         j--
    //     }
    // }
    return false
}

let array = [[1,5,10],[3,6,14],[4,15,18]]
console.log(find2d(5,array))

//请实现一个函数，将一个字符串中的空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。
function replace(str){
    return str.replace(/ /g,'%20')
}
console.log(replace('We Are Happy'))