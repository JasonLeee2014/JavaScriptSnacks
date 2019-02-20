//输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，例如，如果输入如下矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.
function printMatrix(matrix,rows,cols){
    //程序边界
    if(!matrix||rows<=0||cols<=0){
        return
    }

    //程序逻辑
    //使用start来计数，目的是分辨当前应该从startXstart开始打印一圈
    let start = 0

    let result =[]
    while(start*2<cols && start*2<rows){
        result = result.concat(printMatrixCircle(matrix,start,rows,cols))
        start++
    }

    console.log(result.join(','))

    function printMatrixCircle(matrix,start,rows,cols){
        //因为外面有程序边界 这里可以不写
        let endX = cols - start - 1
        let endY = rows - start - 1

        let res = []

        //四步
        //→一定会做
        for(let i = start;i<=endX;i++){
            res.push(matrix[start][i])
        }

        //↓
        //往下打印的条件
        if(endY>start){
            for(let i = start+1;i<=endY;i++){
                res.push(matrix[i][endX])
            }
        }

        //←
        //条件
        if(endY>start&&endX>start){
            for(let i = endX-1;i>=start;i--){
                res.push(matrix[endY][i])
            }
        }

        //↑
        //条件
        if(endY>start&&endX>start+1){
            for(let i = endY-1;i>=start+1;i--){
                res.push(matrix[i][start])
            }
        }

        return res
    }
}

let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
printMatrix(matrix,4,4)