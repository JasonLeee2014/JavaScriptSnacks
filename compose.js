let curry = require('./curry').curry

function compose(...args){
    return function(...input){
        let res
        for (const func of args.slice(0).reverse()) {
            if(typeof func === 'function'){
                if(res){
                    res = func.call(this,res)
                }else{
                    res = func.call(this,...input)
                }
            }
        }
        return res
    }
}


let upper = function(str){
    return str.toUpperCase()
}

let hello = function(str){
    return 'HELLO,'+str
}


//quiz1
var data = {
    result: "SUCCESS",
    tasks: [
        {id: 104, complete: false,            priority: "high",
                  dueDate: "2013-11-29",      username: "Scott",
                  title: "Do something",      created: "9/22/2013"},
        {id: 105, complete: false,            priority: "medium",
                  dueDate: "2013-11-22",      username: "Lena",
                  title: "Do something else", created: "9/22/2013"},
        {id: 107, complete: true,             priority: "high",
                  dueDate: "2013-11-22",      username: "Mike",
                  title: "Fix the foo",       created: "9/22/2013"},
        {id: 108, complete: false,            priority: "low",
                  dueDate: "2013-11-15",      username: "Punam",
                  title: "Adjust the bar",    created: "9/25/2013"},
        {id: 110, complete: false,            priority: "medium",
                  dueDate: "2013-11-15",      username: "Scott",
                  title: "Rename everything", created: "10/2/2013"},
        {id: 112, complete: true,             priority: "high",
                  dueDate: "2013-11-27",      username: "Lena",
                  title: "Alter all quuxes",  created: "10/5/2013"}
    ]
};

function find(key,value,array){
    return Array.prototype.filter.call(array.slice(0),(item)=>item[key]==value)
}

function keep(keys,obj){
    let res = {}
    for (const key of keys) {
        if(Object.prototype.hasOwnProperty.call(obj,key)){
            res[key] = obj[key]
        }
    }
    return res
}

function map(fn,array){
    return array.slice(0).map(fn)
}

function sort(fn,array){
    return array.slice(0).sort(fn)
}

function compare(a,b){
    let dateA = new Date(a.dueDate)
    let dateB = new Date(b.dueDate)
    return dateA > dateB
}

fn = compose(curry(sort)((a,b)=>compare(a,b)),curry(map)(curry(keep)(['id','title','dueDate','priority'])),curry(find)('complete',false),curry(find)('username','Scott'))

console.log(fn(data.tasks))


// console.log(compose(hello,upper)('zaka'))