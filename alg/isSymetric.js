//请实现一个函数，用来判断一颗二叉树是不是对称的。注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。
//主要使用了mirror中的isEqual的变体来实现
function Node(val){
    this.val = val
    this.left = null
    this.right = null
}

let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(5)
let node6 = new Node(6)

node1.left = node2
node1.right = node3
node2.right = node4
node3.left = node5
node3.right = node6

let tree = node1

function isSymmetric(node){
    let node1,node2
    node1 = node2 = node

    function isEqual(node1,node2){
        if(!node1&&!node2){
            return true
        }else if(!node1||!node2){
            return false
        }else if(node1.val!==node2.val){
            return false
        }
    
        return isEqual(node1.left,node2.right) && isEqual(node1.right,node2.left)
    }

    return isEqual(node1,node2)
}

console.log(isSymmetric(tree))