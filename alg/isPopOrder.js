//输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，序列4，5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）

function isPopOrder(pushStack,popStack){
    //程序边界
    if(!pushStack||!popStack||popStack.length>pushStack.length){
        return false
    }

    //程序逻辑
    let stack = []
    let popindex = 0
    for (const item of pushStack) {
        stack.push(item)
        //放完一个到stack里面，然后检查从这个开始pop能不能匹配输出序列
        //基本逻辑就是，每次都先按照输入序列的顺序，push一个进stack，然后从stack的top开始尝试能匹配弹出序列的前几个，把匹配上的都从stack中pop掉，直到不匹配或者stack暂时空了，就再按照输入序列push下一个
        while(stack.length&&stack[stack.length-1]===popStack[popindex]){
            stack.pop()
            popindex++
        }
    }
    //最后stack没有元素的话就是正确的输出序列
    return stack.length == 0
}

console.log(isPopOrder([1,2,3,4,5],[4,3,5,1,2]))