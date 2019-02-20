//在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5
//icloud 笔记本.png
function ListNode(x){
    this.val = x;
    this.next = null;
}

function deduplicate(node){
    //error
    if(!node||!node.next){
        return null
    }

    //logic
    //add empty head
    let placeHolder = new ListNode(null)
    placeHolder.next = node

    let start = placeHolder
    let end = placeHolder.next

    let flag = false

    while(end.next){
        if(end.next.val === end.val){
            flag = true
            end = end.next
        }else{
            if(flag){
                end = end.next
                start.next = end
                flag = false
            }else{
                start = start.next
                end = end.next
            }
        }
    }

    if(!end.next&&flag) start.next = null
    start = end =null
    return placeHolder.next

}

function printList(node){
    let res = []
    while(node){
        res.push(node.val)
        node = node.next
    }

    console.log(res.join('->')+'->null')
}

let node1 = new ListNode(1)
let node2 = new ListNode(2)
let node3 = new ListNode(3)
let node4 = new ListNode(3)
let node5 = new ListNode(4)
let node6 = new ListNode(4)
let node7 = new ListNode(5)
let node8 = new ListNode(6)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6
node6.next = node7
node7.next = node8

printList(deduplicate(node1))