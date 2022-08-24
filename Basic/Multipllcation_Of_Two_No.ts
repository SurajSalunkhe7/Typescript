function main()
{
    var No1:number = 5;
    var No2:number = 25;
    var Ans:number = 0;

    Ans = Multipllcation(No1 , No2)
    console.log("Multipllication Of Two Number:"+Ans);
}

function Multipllcation(Value1:number,Value2:number):number
{
    var ret:number = 0;

    ret = Value1 * Value2;
    return ret;
}


main();