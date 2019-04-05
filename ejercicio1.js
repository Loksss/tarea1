function uno(){
    var matrix = [[0,1,1,2],[0,5,0,0],[2,0,3,3]];
    var sum=0;
    for(var i=0;i<3;i++){
        for(var j=0;j<4;j++){
            sum+=matrix[i][j];
        }
    }
    return sum;
}
console.log("ejercicio 1  [[0,1,1,2],[0,5,0,0],[2,0,3,3]] =  "+uno());
