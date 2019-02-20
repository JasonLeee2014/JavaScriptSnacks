//输入一棵二叉树，求该树的深度。从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，最长路径的长度为树的深度。
//输入一棵二叉树，判断该二叉树是否是平衡二叉树。(另有专门实现的判断平衡的代码)
function BTreeNode(val){
    this.val = val
    this.left = null
    this.right = null
}

let node1 = new BTreeNode(1)
let node2 = new BTreeNode(2)
let node3 = new BTreeNode(3)
let node4 = new BTreeNode(4)
let node5 = new BTreeNode(5)
let node6 = new BTreeNode(6)
let node7 = new BTreeNode(7)
let node8 = new BTreeNode(8)

node1.left = node2
node1.right = node3
node3.left = node4
node3.right = node5
node2.left = node6
// node4.left = node6

node7.left = node6
node7.right  = node8

let tree1 = node1

let result = true
function getDepth(node){
    //error
    //同时也是递归边界
    if(!node){
        return 0
    }

    //logic
    // //r end
    // if(!node.left&&!node.right){
    //     return 1
    // }

    //r logic
    //求是否是平衡树的逻辑本质是利用后序遍历，左右都是平衡的前提下才判断当前节点是否是平衡的(同时根据后序遍历的原理，此时已经得知左右子树的深度了)
    //这样直接跟求深度的代码结合起来的坏处是当result为false时还需要继续计算，无法直接返回false
    result = Math.abs(getDepth(node.left)-getDepth(node.right)) > 1?false:result
    return 1 + Math.max(getDepth(node.left),getDepth(node.right))
}

console.log(getDepth(tree1))
console.log(result)