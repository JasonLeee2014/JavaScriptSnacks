//输入两个链表，找出它们的第一个公共结点。
function ListNode(x){
    this.val = x;
    this.next = null;
}

function FindFirstCommonNode(head1,head2){
    //error
    if(!head1||!head2){
        return null
    }

    function getLength(node){
        let len = 0
        while(node){
            len++
            node = node.next
        }
        return len
    }

    //logic
    //基本思想：1先计算两个链表的长度，并计算长度差
    //也可以分别遍历两个链表，将这两个链表存在两个栈中，然后从这两个栈的栈顶开始比较，直到第一个不相同的节点，其后一个节点为所求
    //其实，这两种思路的思想一样都是利用同时遍历两个链表来减少时间，比起遍历list1的某个元素再遍历list2依次比较好很多
    let len1 = getLength(head1)
    let len2 = getLength(head2)
    let curr1 = len1>len2?head1:head2
    let curr2 = len1<=len2?head1:head2

    //2.只考虑两个链表的后面长度相同的地方，因为第一个公共节点不可能出现在长的那个链表的前面
    for(let i=0;i!=Math.abs(len1-len2);i++){
        curr1 = curr1.next
    }

    //3.依次比较
    while(curr1&&curr2&&curr1!=curr2){
        curr1 = curr1.next
        curr2 = curr2.next
    }

    return curr1
}

let node1 = new ListNode(1)
let node2 = new ListNode(2)
let node3 = new ListNode(3)
let node4 = new ListNode(4)
let node5 = new ListNode(5)
let node6 = new ListNode(6)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node6.next = node4

console.log(FindFirstCommonNode(node6,node1))
