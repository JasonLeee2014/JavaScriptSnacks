function findOnce(arr){
    //error
    if(!arr){
        return null
    }
    //logic

    let str = arr.join('')
    str = str.replace(/(\d)\1/g,'')
    return str.split('').map(item=>+item)

}

function findOnce2(arr){
    //error
    if(!arr){
        return null
    }

    let result = 0
    for (const item of arr) {
        result = result ^ item
    }
    return result
}

console.log(findOnce2([1,1,2,3,3,4,5,5,6,6]))