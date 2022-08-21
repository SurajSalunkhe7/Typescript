
function fun()
{
    console.log("Inside function:");
}

fun();

function gun(no : number)
{
    console.log("Inside Gun:"+no);
}

gun(11);

function sun(no : number):number
{
    var i : number = no;
    i++;
    return i;
}

var ret : number = 0;
var a : number = 10;
ret = sun (a);
console.log("Return Value IS:"+ret);