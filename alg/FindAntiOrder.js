function findAntiOrder(array){
    //error
    if(!array){
        return null
    }

    //logic

    let count = 0

    for(let i =0;i!=array.length-1;i++){
        for (const item of array.slice(i+1)) {
            if(array[i] > item){
                count++
            }
        }
    }

    console.log(count)
}

findAntiOrder([7,5,6,4])