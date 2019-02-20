//输入一棵二叉树，判断该二叉树是否是平衡二叉树。
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
// node2.left = node6
node4.left = node6

node7.left = node6
node7.right  = node8

let tree1 = node1

function isBalanced(node){
    if(!node){
        return {
            balance:true,
            depth:0,
        }
    }

    let checkdLeft = isBalanced(node.left)
    let checkedRight = isBalanced(node.right)
    if(checkdLeft.balance&&checkedRight.balance){
        return {
            balance:Math.abs(checkdLeft.depth - checkedRight.depth) <= 1,
            depth:1 + Math.max(checkdLeft.depth,checkedRight.depth)
        }
    }else{
        return {
            balance:false,
            depth:undefined,
        }
    }
}

console.log(isBalanced(tree1).balance)