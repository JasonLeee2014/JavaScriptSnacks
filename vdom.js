class createElement{
    constructor(tag,attr,children){
        this.tag = tag
        this.attr = attr
        this.children = children
    }

    render(){
        let elem = document.createElement(this.tag)
        Object.keys(this.attr).forEach(key=>{
            elem.setAttribute(key,this.attr[key])
        })
        for (const child of children) {
            let childElem = child instanceof createElement?child.render():document.createTextNode(child)
            elem.appendChild(childElem)
        }

        return elem
    }
}

function create(tag,attr,children){
    return new createElement(tag,attr,children)
}

let container = create('div',{
    width:'100px',
    height:'100px',
    style:{'background-color':'red'}
},['hello',create('p',{},['world'])])

let elem = container.render()
document.body.appendChild(elem)