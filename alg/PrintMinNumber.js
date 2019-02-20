function PrintMinNumber(numbers){
    //error
    if(!numbers){
        return null
    }

    let all = listAll(numbers)

    let min = Infinity
    for (const item of all) {
        min = min > item?item:min
    }

    return min
}


function listAll(numbers){
    //error
    if(!numbers){
        return null
    }

    //递归边界
    if(numbers.length === 1){
        return [numbers+'']
    }

    //logic
    let res = []
    for(let i=0;i!=numbers.length;i++){
        [numbers[0],numbers[i]] = [numbers[i],numbers[0]]

        for (const item of listAll(numbers.slice(1))) {
            res.push(numbers[0]+item)
        }

        [numbers[0],numbers[i]] = [numbers[i],numbers[0]]
    }
    return res
}

console.log(PrintMinNumber(['3','32','321']))