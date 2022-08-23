function main()
{
    var a:number = 12;
    var Ans:number = 0;

    Ans = sun(a)
    console.log("Return Value Is:"+Ans);
}

function sun(Value:number):number
{
    var i:number = Value;
    i++;
    return i
}
main();