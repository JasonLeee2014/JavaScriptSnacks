//请实现一个函数用来找出字符流中第一个只出现一次的字符。例如，当从字符流中只读出前两个字符"go"时，第一个只出现一次的字符是"g"。当从该字符流中读出前六个字符“google"时，第一个只出现一次的字符是"l"。
//基本思想：用一个数组来存储每次读入的字符的重复情况，-1为一次都没读入，-2为有重复，正数是这个字符读入的顺序，而且这个数组按字符的ascii码来排序
function findOnceInStream(){
    let hashMap = new Array(256)
    hashMap.fill(-1)
    let apperOrder = 0
    return function(char){
        let code = char.charCodeAt()
        if(hashMap[code] === -1){
            hashMap[code] = apperOrder
        }else if(hashMap[code] >= 0){
            hashMap[code] = -2
        }
        apperOrder++

        for (const [index, value] of hashMap.entries()) {
            if(value >= 0){
                return String.fromCharCode(index)
            }
        }
        return null
    }
}

let addToStream = findOnceInStream()
console.log(addToStream('g'))
console.log(addToStream('o'))
console.log(addToStream('o'))
console.log(addToStream('g'))
console.log(addToStream('l'))
console.log(addToStream('e'))