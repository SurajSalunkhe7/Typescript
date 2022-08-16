function main()
{
    var No1:number = 25;
    var No2:number = 5;
    var Ans:number = 0;

    Ans = Division(No1, No2)
    console.log("Division Of Two Number:"+Ans);
}

function Division(Value1:number , Value2:number):number
{
    var ret:number = 0;

    ret = Value1 / Value2;
    return ret;
}

main();