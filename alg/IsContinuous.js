//LL今天心情特别好,因为他去买了一副扑克牌,发现里面居然有2个大王,2个小王(一副牌原本是54张^_^)...他随机从中抽出了5张牌,想测测自己的手气,看看能不能抽到顺子,如果抽到的话,他决定去买体育彩票,嘿嘿！！“红心A,黑桃3,小王,大王,方片5”,“Oh My God!”不是顺子.....LL不高兴了,他想了想,决定大小 王可以看成任何数字,并且A看作1,J为11,Q为12,K为13。上面的5张牌就可以变成“1,2,3,4,5”(大小王分别看作2和4),“So Lucky!”。LL决定去买体育彩票啦。 现在,要求你使用这幅牌模拟上面的过程,然后告诉我们LL的运气如何。为了方便起见,你可以认为大小王是0。
function IsContinuous(array){
    //error
    if(!array){
        return false
    }

    //logic

    //preprsocess
    let kingCount = 0
    array = array.map(item=>{
        if(item === 'A'){
            return 10
        }else if(item === 'J'){
            return 11
        }else if(item === 'Q'){
            return 12
        }else if(item === 'K'){
            return 13
        }else if(item === 'G'||item === 'g'){
            kingCount++
            return 0
        }else{
            return +item
        }
    })

    array = array.filter(item=>item!==0)

    //find hole
    array = array.sort((a,b)=>a>b)
    let holeCount = 0
    for(let i=0;i!=array.length-1;i++){
        if(array[i+1] === array[i]) return false
        holeCount += array[i+1] - array[i] -1
    }

    return holeCount > kingCount?false:true

}

console.log(IsContinuous([7,9,'A','g','G']))