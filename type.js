function type(item){
    //首先利用typeof判断是否是基础类型，是的话就返回值
    if(typeof item != 'object'){
        return typeof item 
    }

    //如果是object，使用toString来判断类型
    let type = Object.prototype.toString.call(item).toLowerCase()
    type = type.slice(8,type.length-1)
    return type
}

// console.log(typeof null)

// console.log(undefined == null)


function getMax(array){
    // let max = array[0]
    // for(let i = 1;i!=array.length;i++){
    //     if(array[i]>max){
    //         max = array[i]
    //     }
    // }

    // return max

    return Array.prototype.reduce.call(array,(item,acc=0)=>acc < +item ? acc:item)

}

// console.log(getMax([1,3,false,7,'9',4,6]))

module.exports = {
    type:type
}