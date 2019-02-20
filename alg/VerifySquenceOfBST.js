//输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。(测试用例用的是 false/true, 不是题目中的 'Yes'/'No')

function VerifySquenceOfBST(squence){
    //程序边界
    if(squence.filter(i=>typeof i != 'number').length){
        return
    }
    if(squence.length<=2){
        return true
    }

    //程序逻辑
    let root = squence.splice(squence.length-1,1)

    function comparer(arr,target,margin){
        if(margin>=arr.length||margin<-1){
            return false
        }
        if(margin == -1){
            return (Array.prototype.filter.call(arr,i=>i<target).length == 0)&&VerifySquenceOfBST(arr)
        }
        if(margin == arr.length-1){
            return (Array.prototype.filter.call(arr,i=>i>=target).length == 0)&&VerifySquenceOfBST(arr)
        }
        let left = Array.prototype.slice.call(arr,0,margin+1)
        let right = Array.prototype.slice.call(arr,margin+1,arr.length)
        return ((Array.prototype.filter.call(left,i=>i>=target).length == 0) && (Array.prototype.filter.call(right,i=>i<target).length == 0)) && VerifySquenceOfBST(left) && VerifySquenceOfBST(right)
    }

    let lastLeftIndex = -1
    for (const [index,elm] of squence.entries()) {
        if(elm < root){
            lastLeftIndex = index
        }
    }
    return comparer(squence,root,lastLeftIndex)

}

console.log(VerifySquenceOfBST([7,4,6,5]))