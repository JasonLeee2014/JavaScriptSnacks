//用两个栈来实现一个队列，完成队列的enqueue和dequeue操作。 队列中的元素为int类型。
class myQueue{
    //stack1为该队列实际存储的内容
    constructor(){
        this.stack1 = []
        this.stack2 = []
    }

    enqueue(val){
        this.stack1.push(val)
    }

    dequeue(){
        let temp
        //把stack1通过pop放到stack2 形成倒序
        while(temp = this.stack1.pop()){
            this.stack2.push(temp)
        }
        //删除dequeue应该删除的那个元素
        this.stack2.pop()
        //再从stack2中放到stack1
        while(temp = this.stack2.pop()){
            this.stack1.push(temp)
        }
    }

    print(){
        console.log(this.stack1)
    }
}

let q = new myQueue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.print()
q.dequeue()
q.print()