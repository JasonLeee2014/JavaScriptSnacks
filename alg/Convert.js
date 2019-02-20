//输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新的结点，只能调整树中结点指针的指向。
function BTreeNode(val){
    this.val = val
    this.left = null
    this.right = null
}

let node1 = new BTreeNode(2)
let node2 = new BTreeNode(1)
let node3 = new BTreeNode(3)
let node4 = new BTreeNode(4)
let node5 = new BTreeNode(5)
let node6 = new BTreeNode(6)
let node7 = new BTreeNode(7)
let node8 = new BTreeNode(8)

node1.left = node2
node1.right = node4
node4.left = node3
node4.right = node6

node7.left = node6
node7.right  = node8

let tree1 = node1

function Convert(node){
    //error
    if(!node){
        return null
    }

    //logic
    //r end
    if(node.left == null && node.right == null){
        return node
    }

    //r logic
    let left = Convert(node.left)
    let head = left
    let right = Convert(node.right)

    while(left.right){
        left = left.right
    }

    node.left = left
    node.right = right
    left.right = node
    right.left = node

    return head
}

function printTree(node){
    let res= []
    while(node.right){
        res.push(node.val)
        node = node.right
    }
    console.log(res.join('->'))
}

printTree(Convert(tree1))