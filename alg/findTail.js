//输入一个链表，输出该链表中倒数第k个结点。
let {listNode,linkList} = require('./relink')

let node = new listNode(1)
let list = new linkList(node)
list.append(2)
list.append(3)
list.append(4)

list.print(false)

function reverseList(list){
    let temp1 = list.head.next
    list.head.next = null
    list.tail = list.head
    let temp2 = temp1.next
    while(temp2){
        temp1.next = list.head
        list.head = temp1
        temp1 = temp2
        temp2 = temp1.next
    }
    temp1.next = list.head
    list.head = temp1
}

//使用递归
// function reverseList2(list){
//     let newHead, temp
//     if(!list){
//         return null
//     }
//     if(list.next === null){
//         return list
//     }else{
//         newHead = reverseList2(list.next)
//     }
//     temp = list.next
//     temp.next = list
//     list.next = null
//     temp = null
//     return newHead
// }

// list.head = reverseList2(list.head)
// list.print()


function findTail(list,n){
    reverseList(list)
    list.curr = list.head
    let i = 0
    while(list.curr){
        i++
        if(i == n){
            return list.curr.val
        }
        list.curr = list.curr.next
    }
}

console.log(findTail(list,3))