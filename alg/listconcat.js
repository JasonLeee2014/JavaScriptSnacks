//输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。

function ListNode(x){
    this.val = x;
    this.next = null;
}

function concatList(head1,head2){
    //错误处理 程序边界
    if(!head1){
        return head2?head2:null
    }
    if(!head2){
        return head1
    }

    //程序主要逻辑

    /*对于链表问题 需要大量指针 当需要元素遍历时 初始一个遍历用的指针*/
    let curr1 = head1
    let curr2 = head2

    let result = new ListNode(-Infinity)
    let curr_result = result

    //助记 一个while两个if
    while(curr1&&curr2){
        if(curr1.val < curr2.val){
            curr_result.next = curr1
            curr1 = curr1.next
        }else{
            curr_result.next = curr2
            curr2 = curr2.next
        }
        curr_result = curr_result.next
    }

    if(curr1){
        curr_result.next = curr1
    }

    if(curr2){
        curr_result.next = curr2
    }

    result = result.next

    return result
}

//输入一个链表，反转链表后，输出链表的所有元素。
function reverseList(head){
    //边界
    if(!head){
        return null
    }

    //主要逻辑
    //链表的题需要很多指针，这里需要三个，一个指向当前节点，一个指向前一个节点(因为需要改变指向)，另一个需要指向后一个节点(保存因为改变指向而无法访问的后面的节点)
    let prev = head
    let curr = head.next
    let post = curr.next

    //还需要明确新的头结点，应该是next为null的节点为新的头结点
    prev.next = null
    while(curr.next){
        curr.next = prev
        prev = curr
        curr = post
        post = curr.next
    }
    curr.next = prev
    return curr
}

function findTail(head,n){
    //边界(一般针对输入即可)
    if(!head || n <= 0){
        return null
    }

    //主要逻辑 对链表 需要很多指针
    //这里需要2个
    let ahead = head
    let behind = head

    //这里只循环n-1次，是为了对于倒数1不是倒数第0个
    for(let i = 0;i!=n-1;i++){
        ahead = ahead.next
        //边界 当n超过总长度报错
        if(!ahead){
            return null
        }
    }

    //此时behind开始
    //这里没有判断ahead为null是因为逻辑上当ahead.next为空，就是最后一个节点了，null不是最后一个节点
    while(ahead.next){
        behind = behind.next
        ahead = ahead.next
   }
   return behind.val
}

function printList(head){
    let res = []
    let curr = head
    while(curr){
        res.push(curr.val)
        curr = curr.next
        
    }
    console.log(res.join('->')+'->null')
}

let node1 = new ListNode(1)
let node2 = new ListNode(2)
let node3 = new ListNode(5)
let node4 = new ListNode(8)
let node5 = new ListNode(3)
let node6 = new ListNode(4)
let node7 = new ListNode(9)
let node8 = new ListNode(10)

let list1 = node1
node1.next = node2
node2.next = node3
node3.next = node4

let list2 = node5
node5.next = node6
node6.next = node7
node7.next = node8

printList(list1)
console.log(findTail(list1,4))
printList(list2)
printList(concatList(list1,list2))
printList(reverseList(list1))
