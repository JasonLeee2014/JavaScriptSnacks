//输入一颗二叉树和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
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

node7.left = node6
node7.right  = node8

let tree1 = node1

let path = []
function findPath(node,n){
    //error
    if(!node){
        return
    }

    //logic
    path.push(node.val)

    //recursive end
    if(!node.left&&!node.right){
        if(path.reduce((acc,curr)=>acc+curr,0) === n){
            console.log(path.join('->'))
        }
    }else{
        findPath(node.left,n)
        findPath(node.right,n)
    }

    path.pop()


}

findPath(tree1,9)