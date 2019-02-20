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
let tree2 = node3
let tree3 = node7

//输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
function hasSubTree(parent,child){
    //程序边界
    if(parent == null || child == null){
        return false
    }

    let result = false

    function isEqualTree(tree1,tree2){
        //递归结束的边界条件
        if(tree2 == null){
            //如果tree2(即小的子树都为空了，说明已经到了叶节点，此时比完了，返回true)
            return true
        }else if(tree1 == null){
            //此时tree1为null,tree2非空，显然不相等，返回false
            return false
        }

        //递归逻辑 整个都相同才返回true否则返回false
        return (tree1.val === tree2.val)&&isEqualTree(tree1.left,tree2.left)&&isEqualTree(tree1.right,tree2.right)
    }

    //递归逻辑
    //这里使用result记录结果的目的在于，是一步一步比较，当根节点不相同不匹配，才看左右子树，这实际是利用递归遍历树，找到与待查树的根节点值相同的，在看是否完全相同
    if(parent.val === child.val){
        result = isEqualTree(parent,child)
    }
    if(!result){
        result = hasSubTree(parent.left,child)
    }
    if(!result){
        result = hasSubTree(parent.right,child)
    }
    return result
}

console.log(hasSubTree(tree1,tree2))

//操作给定的二叉树，将其变换为源二叉树的镜像。
function mirror(node){
    //程序边界
    if(!node){
        return null
    }

    //递归边界
    if(node.left == null && node.right == null){
        return node
    }

    //递归逻辑
    let temp = node.left
    node.left = mirror(node.right)
    node.right = mirror(temp)

    return node

}

console.log(mirror(tree1))
