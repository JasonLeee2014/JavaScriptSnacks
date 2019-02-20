//输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。
function arrayModify(array){
    // let odds = array.filter(item=>item%2!=0)
    // let evens = array.filter(item=>item%2==0)
    let odds = array.filter(item=>(item&1)==1)//可以使用与运算符来判断奇偶性，注意打括号(item&1)
    let evens = array.filter(item=>(item&1)==0)
    return odds.concat(evens)
}

console.log(arrayModify([3,5,1,2,6,2,7,6,5,8,0,6,9]))