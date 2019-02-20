function maxInWindows(array,size){
    //error
    if(!array||!size){
        return null
    }
    if(array.length<size||size<1){
        return []
    }

    //logic
    let len = array.length - size + 1
    let res = []
    for(let i=0;i!=len;i++){
        res[i] = Math.max(...(array.slice(i,i+size)))
    }
    return res
}

console.log(maxInWindows([2,3,4,2,6,2,5,1],3))