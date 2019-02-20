function bigIntAddtion(a,b){
    if(/\D/g.test(a) || /\D/g.test(b)){
        return 'input error'
    }

    let len = a.length > b.length ? a.length:b.length

    if(a.length>b.length){
        let end = len-b.length
        for(let i=0;i!=end;i++){
            b = '0'+b
        }
    }else{
        let end = len-a.length
        for(let i =0;i!=end;i++){
            a = '0'+a
        }
    }

    let a_array = a.split('').reverse()
    let b_array = b.split('').reverse()

    let carryOn = 0
    let result_array = []

    for(let i = 0;i!=len;i++){
        let temp = a_array[i]*1+b_array[i]*1+carryOn
        result_array[i] = temp>9?temp-10:temp
        carryOn = temp>9?1:0
    }

    if(carryOn==1){
        result_array[len] = 1
    }

    return result_array.reverse().join('')
}

console.log(bigIntAddtion('1223123123131231','12003123123123108398139128312'))