class listNode{
    constructor(val,next=null){
        this.val = val
        this.next = next
    }
}

class linkList{
    constructor(head=null){
        this.head = head
        this.curr = head
        this.tail = head
    }

    append(val){
        this.tail.next = new listNode(val)
        this.tail = this.tail.next
    }

    print(reverse){
        let curr = this.head
        let res = []
        while(curr){
            res.push(curr.val)
            curr = curr.next
        }
        console.log(reverse?res.reverse().join('->'):res.join('->'))
    }

}


module.exports = {
    listNode,
    linkList,
}

let node = new listNode(1)
let list = new linkList(node)
list.append(2)
list.append(3)
list.append(4)

list.print(true)