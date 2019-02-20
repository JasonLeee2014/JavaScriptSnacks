//Q1
let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';
console.log(parseParam(url))

function parseParam(url){
    let result = new Object()

    url.match(/\?([^#]*)/g)
    let paramsStr = RegExp.$1
    let paramsExps = paramsStr.split('&')
    for (const paramExp of paramsExps) {
        if(/(\w+)=(.*)/g.test(paramExp)){
            let key = RegExp.$1
            let value = RegExp.$2
            value = decodeURI(value)
            // if(/^([\.\-\+]*)(\d(\.*))+$/g.test(value)){
            //     value = value*1
            // }

            //注意这里是如何判断NaN的，不能通过NaN==NaN
            if((value*1).toString() != 'NaN'){
                value = value*1
            }
            if(result.hasOwnProperty(key)){
                if(result[key] instanceof Array){
                    result[key].push(value)
                }else{
                    let temp = result[key]
                    result[key] = []
                    result[key].push(temp)
                    result[key].push(value)
                }
            }else{
                result[key] = value
            }
        }else{
            result[paramExp] = true
        }
    }

    return result
}

//Q2
let template = '我是{{name}}，年龄{{age[r][g][b]}}，性别{{sex}}';
let data = {
  name: '姓名',
  age: {r:{g:{b:16}}}
}
console.log(render(template, data)); // 我是姓名，年龄18，性别undefined

function render(){
    let template = arguments[0]
    let data = arguments[1]

    let reg = /\{\{([^\}]*)\}\}/g
    let result = template.replace(reg,function(key){
        key.match(/^\{\{([^\}]*)\}\}$/)
        let path = RegExp.$1
        path = path.replace(/\[([^\]]*)\]/g,'.$1')
        let args = path.split('.')
        let v = data
        args.forEach(element => {
            v = v[element]
        })
        return v
        // return eval(`data.${RegExp.$1}`)
    })
    return result
}

//Q3
let domNode = {
    tagName: 'ul',
    props: { class: 'list' },
    children: [{
      tagName: 'li',
      children: ['item1']
    }, {
      tagName: 'li',
      children: ['item1']
    }]
  };

  function h(Vnode){
      if(!Vnode.hasOwnProperty('tagName')){
          return Vnode
      }
      let tagName = Vnode.tagName
      let props = Vnode.props
      let children = Vnode.children
      let renderdProps = props?` ${Object.keys(props).map(key => {
          return `${key}="${props[key]}"`
      }).join(' ')}`:''

       let renderdChildren = children.map(child => {
          return h(child)
      }).join('')
      document.body.innerHTML = `<${tagName}${renderdProps}>${renderdChildren}</${tagName}>`
      return `<${tagName}${renderdProps}>${renderdChildren}</${tagName}>`
  }
  
  // 构建一个 render 函数，将 domNode 对象渲染为 以下 dom
//   <ul class="list">
//       <li>item1</li>
//       <li>item2</li>
//   </ul>

console.log(h(domNode))
