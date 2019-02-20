//请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，向右，向上，向下移动一个格子。如果一条路径经过了矩阵中的某一个格子，则该路径不能再进入该格子。 例如 a b c e s f c s a d e e 矩阵中包含一条字符串"bcced"的路径，但是矩阵中不包含"abcb"路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入该格子。
//注意与树的路径查找那个题联合思考 对路径查找问题 1需要全局变量保存一些状态 2利用递归 3什么时候检查是否已经满足条件 4基于尝试的基本思想，当不正确或已经不满足条件时需要在全局状态上撤销当前操作
function findPathInMatrix(matrix,path,cols,rows){
    //error
    if(!matrix||!path||!cols||!rows){
        return false
    }

    //logic
    //这里放需要全局使用的变量 包括 路径 访问状态 当前尝试填充的路径中的第几项
    let visited = []
    for(var i = 0; i < rows * cols; i++){
        visited[i] = false;
    }
    let pathLen = 0

    for(let i=0;i!=rows;i++){
        for(let j=0;j!=cols;j++){
            if(core(i,j)) return true
        }
    }

    return false

    function core(row,col){
        //参考以下的代码 实现递归找东西的返回值 1边界直接返回 2内部的情况 设置一个变量初值为false 根据情况改变这个变量 并最后返回
        if(pathLen === path.length){
            return true
        }
        let result = false
        if(row>=0&&row<rows&&col>=0&&col<cols&&matrix[row*cols+col] === path[pathLen]&&!visited[row*cols+col]){
            pathLen++
            visited[row*cols+col] = true
            result = core(row-1,col)+core(row+1,col)+core(row,col-1)+core(row,col+1)
            if(!result){
                pathLen--
                visited[row*cols+col] = false
            }
        }
        return result
    }
}

console.log(findPathInMatrix([1,2,3,4,5,6,7,8,9],[2,3,6,9],3,3))

//地上有一个m行和n列的方格。一个机器人从坐标0,0的格子开始移动，每一次只能向左，右，上，下四个方向移动一格，但是不能进入行坐标和列坐标的数位之和大于k的格子。 例如，当k为18时，机器人能够进入方格（35,37），因为3+5+3+7 = 18。但是，它不能进入方格（35,38），因为3+5+3+8 = 19。请问该机器人能够达到多少个格子？
function movingCount(threshold, rows, cols){
    var visited = [];
    for(var i = 0; i < rows * cols; ++i)
        visited[i] = false;
    var count = movingCountCore(0, 0);
    visited.length = 0;
    return count;

    function getDigitSum(number){
        var sum = 0;
        while(number > 0){
            sum += number % 10;
            number = Math.floor(number / 10);
        }
        return sum;
    }

    function check(row, col){
        if(row >= 0 && row < rows && col >= 0 && col < cols && getDigitSum(row) + getDigitSum(col) <= threshold && !visited[row * cols + col])
            return true;
        return false;
    }

    function movingCountCore(row, col){
        var count = 0;
        if(check(row, col)) {
            visited[row * cols + col] = true;
            count = 1 + movingCountCore(row - 1, col)
                    + movingCountCore(row, col - 1)
                    + movingCountCore(row + 1, col)
                    + movingCountCore(row, col + 1);
        }
        return count;
    }
}