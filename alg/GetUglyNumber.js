//把只包含因子2、3和5的数称作丑数（Ugly Number）。例如6、8都是丑数，但14不是，因为它包含因子7。 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。
//每次根据uglyNumbers中的数生成之后的那个丑数(就是找到uglyNumbers里面第一个*2/*3/*5大于(不包括等于)现有的uglyNumbers最大那个丑数的数，同时记录位置，每次不用完整遍历uglyNumbers，只需要从记录的上次刚好超过uglyNumbers中最大丑数的位置开始即可(对235每个都要一个记录的位置))
function GetUglyNumber(n){
    let uglyNumbers = [1]
    let ugly2 = 0
    let ugly3 = 0
    let ugly5 = 0

    while(n){
        while(uglyNumbers[ugly2]*2<=uglyNumbers[uglyNumbers.length-1]){
            ugly2++
        }
        while(uglyNumbers[ugly3]*3<=uglyNumbers[uglyNumbers.length-1]){
            ugly3++
        }
        while(uglyNumbers[ugly5]*5<=uglyNumbers[uglyNumbers.length-1]){
            ugly5++
        }
        let min = Math.min(uglyNumbers[ugly2]*2,uglyNumbers[ugly3]*3,uglyNumbers[ugly5]*5)
        
        uglyNumbers.push(min)
        n--
    }

    console.log(uglyNumbers)
}


GetUglyNumber(10)