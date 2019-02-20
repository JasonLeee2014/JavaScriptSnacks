//从上往下打印出二叉树的每个节点，同层节点从左至右打印。
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

node7.left = node6
node7.right  = node8

let tree1 = node1

function walkTree(node){
    //程序边界
    if(!node){
        return
    }

    //程序逻辑
    let res = []
    let queue = []
    queue.__proto__.enqueue = (val)=>{queue.push(val)}
    //注意splice会改变原数组，然后返回的是删除的元素的数组
    queue.__proto__.dequeue = ()=>queue.splice(0,1)[0]

    //主要逻辑-未使用递归进行遍历的树算法
    //首先将根节点入队
    queue.enqueue(node)
    while(queue.length){

        //每次先出队一个，然后如果这个有左右节点，就将左右节点入队，直到队为空
        let dequeued = queue.dequeue()
        if(dequeued.left){
            queue.enqueue(dequeued.left)
        }
        if(dequeued.right){
            queue.enqueue(dequeued.right)
        }

        res.push(dequeued.val)
    }
    return res
}

console.log(walkTree(tree1))