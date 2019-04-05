var con=0;
function tres(cad){
    var res = '';
    while(con < cad.length){
        var c = cad.charAt(con);
        if(c=='('){
            con++;
            res+=add(cad);
        }else{
            res+=c;
        }
        con++;
    }
    return res;
}
const add=(cad)=>{
    var res = '';
    while(con < cad.length){
        var c = cad.charAt(con);
        if(c=='('){
            con++;
            res+=add(cad);
        }else if(c==')'){
            res=volteo(res);
            return res;
        }else{
            res+=c;
        }
        con++;
    }
    return res;
}

function volteo(cad){
    var sum = '';
    for(var i=cad.length-1;i>=0;i--){
        var c = cad.charAt(i);
        sum+=c;
    }
    return sum;
}
console.log("ejercicio 3 foo(bar(baz))blim = "+tres("foo(bar(baz))blim"));
