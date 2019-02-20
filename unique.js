function unique(array){
    let obj = {}
    for (const item of array) {
        obj[item+''] = 0
    }

    return Object.keys(obj)
}


function unique2(array){
    let res = []
    for(var i = 0;i!=array.length;i++){
        for(var j = 0;j!=res.length;j++){
            if(res[j] == array[i]){
                break
            }
        }
        if(j == res.length){
            res.push(array[i])
        }
    }
    return res
}

function unique3(array){
    let res = array.filter((item,index)=>{
        return array.indexOf(item) == index
    })
    return res
}
let array = [1,2,2,'hello','hello',3,3,4,5,1,2,6]
// console.log(unique3(array))

console.log(unique.constructor.toString().slice(2,unique.constructor.toString().length))