//请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，其他行以此类推。
//从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。

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


//只用stack与queue的原生api
function printZ(node){
    //error
    if(!node){
        return
    }

    //logic
    Array.prototype.enqueue = function(val){this.push(val)}
    Array.prototype.dequeue = function(){return this.shift()}

    let queue = []
    let stack = []

    let res = []

    queue.enqueue({level:0,item:node})
    while(queue.length){
        let dequeued = queue.dequeue()
        if(stack.length){
            let stackTop = stack.pop()
            stack.push(stackTop)
            if(stackTop.level!==dequeued.level){
                while(stack.length){
                    res.push(stack.pop())
                }
            }
        }
        if(dequeued.level%2!==0){
            stack.push(dequeued)
        }else{
            res.push(dequeued)
        }
        if(dequeued.item.left) queue.enqueue({level:dequeued.level+1,item:dequeued.item.left})
        if(dequeued.item.right) queue.enqueue({level:dequeued.level+1,item:dequeued.item.right}) 
    }

    console.log(res.map(item=>item.item.val).join('->'))
}

//使用customize的queue
//重点理解这里的如何实现分层的思想-利用for循环，遍历当前queue的所有元素(通过for循环每次都把同一层的都放到queue中)，但是要注意length要提前缓存，不然直接用queue.length会动态变化
function printZ2(node){
    //error
    if(!node){
        return
    }

    //logic
    Array.prototype.enqueue = function(val){this.push(val)}
    Array.prototype.dequeue = function(){return this.shift()}

    let queue = []
    let res = []
    let level = []

    let flag = false

    queue.enqueue(node)
    while(queue.length){
        let len = queue.length
        for(let i=0;i!=len;i++){
            let dequeued = queue.dequeue()
            level.push(dequeued)
            if(dequeued.left) queue.push(dequeued.left)
            if(dequeued.right) queue.push(dequeued.right)
        }
        if(flag) level = level.reverse()
        res = res.concat(level)
        level = []
        flag = !flag
    }

    console.log(res.map(item=>item.val).join('->'))
}

function printTree(node){
    //error
    if(!node){
        return
    }

    //logic
    Array.prototype.enqueue = function(val){this.push(val)}
    Array.prototype.dequeue = function(){return this.shift()}

    let queue = []
    let res = []
    let level = []

    queue.enqueue(node)
    while(queue.length){
        let len = queue.length
        for(let i=0;i!=len;i++){
            let dequeued = queue.dequeue()
            level.push(dequeued)
            if(dequeued.left) queue.push(dequeued.left)
            if(dequeued.right) queue.push(dequeued.right)
        }
        res = res.concat(level)
        console.log(level.map(item=>item.val).join(' '))
        level = []
    }
}

printTree(tree)