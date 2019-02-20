function TreeNode(val){
    this.val = val
    this.left = null
    this.right = null
}

//思想：每次前序遍历的第一个始终是当前树的根节点，根据这个值在后序遍历中的位置能判断出哪些是属于left子树，哪些是属于right子树，同时，前序遍历也是[根节点，left，right]，所以可以利用左右子树递归调用reconstruct方法最终重建树
function reconstruct(pre,mid){
    if(pre.length == 0 || mid.length == 0){
        return
    }
    let val = pre[0]
    let index = mid.indexOf(val)
    let left = mid.slice(0,index)
    let right = mid.slice(index+1)
    let tree = TreeNode(val)
    tree.left = reconstruct(pre.slice(1,index+1),left)
    tree.right = reconstruct(pre.slice(index+1),right)
    return tree
}