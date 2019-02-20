function match(str){
    return /^(\+?|\-?)(\.?)\d+(\.\d+)?((e|E)(\+?|\-?)\d+?)?$/g.test(str)
}

console.log(match(".5e2"))