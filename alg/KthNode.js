//给定一颗二叉搜索树，请找出其中的第k大的结点。例如， 5 / 3 7 / / 2 4 6 8 中，按结点数值大小顺序第三个结点的值为4。
//主要思想 利用中序遍历
function Node(val){
    this.val = val
    this.left = null
    this.right = null
}

let node1 = new Node(5)
let node2 = new Node(3)
let node3 = new Node(7)
let node4 = new Node(4)
let node5 = new Node(6)
let node6 = new Node(12)

node1.left = node2
node1.right = node3
node2.right = node4
node3.left = node5
node3.right = node6

let tree = node1

function KthNode(node,k){
    //error
    if(!node||!k||k<=0){
        return null
    }

    //logic
    let count = 0
    //middle order iteration
    //注意遍历找值的处理思路，一步一步的遍历*并返回值* 找到了就直接返回true，最后兜底还要有个返回值false 这样就可以递归返回回去 后面的就不用遍历了
    function iterate(node){
        if(!node){
            return false
        }

        if(node.left&&iterate(node.left)) return true
        count++
        if(count === k){
            console.log(node)
            return true
        }
        if(node.right&&iterate(node.right)) return true
        return false
    }

    console.log(iterate(node))

}
KthNode(tree,5)