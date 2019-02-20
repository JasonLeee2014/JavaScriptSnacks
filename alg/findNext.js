//给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。
function Node(val){
    this.val = val
    this.left = null
    this.right = null
    this.parent = null
}

let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(5)
let node6 = new Node(6)

node1.left = node2
node2.parent = node1
node1.right = node3
node3.parent = node1
node2.right = node4
node4.parent = node2
node3.left = node5
node5.parent = node3
node3.right = node6
node6.parent = node3

let tree = node1


function findNext(node){
    //error
    if(!node){
        return null
    }

    function isLeft(node){
        return node.parent.left == node
    }

    //r-end
    //root
    //边界条件必须要 不然会继续往其parent找 注意 这里当是最后一个节点找next时，因为递归前将右子树置空，所以会返回正确的null
    if(!node.parent){
        return node.right
    }

    //判断右子树，有就返回，否则如果这个节点是个左子树，其下一个就是其parent，否则当前节点为右子树，其下一个节点为递归调用父节点的下一个(此时不考虑这个节点)
    if(node.right){
        return node.right
    }else if(isLeft(node)){
        return node.parent
    }else if(!isLeft(node)){
        //注意 在递归调用前需要把当前节点的父节点的右节点置空，不然当前节点的父节点调用findNext就又会找到当前节点
        let temp = node.parent.right
        node.parent.right = null
        let res = findNext(node.parent)
        //同时得到值之后要恢复➡右子树
        node.parent.right = temp
        return res
    }
}

console.log(findNext(node5))