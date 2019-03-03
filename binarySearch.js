function helper(arr,item,start,end){
    if(start > end){
        return -1
    }
    let middle = Math.floor((start + end)/2)
    if(arr[middle] === item){
        return middle
    }

    let ret = -1

    if(arr[middle] < item){
        ret = helper(arr,item,middle+1,end)
    }

    if(arr[middle] > item){
        ret = helper(arr,item,start,middle-1)
    }

    return ret

}

console.log(helper([1,2,3,4,5,6,7,8,9],19,0,8))


function BST(val){
    this.val = val
    this.left = null
    this.right = null
}

function insertNode(node,tree){
    if(!node){
        return
    }

    if(node.val <= tree.val){
        if(!tree.left){
            tree.left = node
        }else{
            insertNode(node,tree.left)
        }
    }else{
        if(!tree.right){
            tree.right = node
        }else{
            insertNode(node,tree.right)
        }
    }

}

function buildBinarySearchTree(arr){
    if(!arr){
        return null
    }

    let tree = new BST(arr[0])

    for (let i=1;i!=arr.length;i++) {
        let node = new BST(arr[i])
        insertNode(node,tree)
    }

    return tree
}

function findBST(arr,item){
    if(!arr||!item){
        return false
    }

    let tree = buildBinarySearchTree(arr)

    while(tree){
        if(tree.val === item){
            return true
        }

        if(tree.val < item){
            tree = tree.right
        }else{
            tree = tree.left
        }
    }

    return false

}

console.log(findBST([2,1,3,5,4,7,8,67,54,13,9,10],9))