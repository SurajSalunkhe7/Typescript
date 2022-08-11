function main()
{
    var No1:number = 22;
    var No2:number = 33;
    var Ans:number = 0;
    
    Ans = Addition(No1,No2)
    console.log("Addition Of Two Number:"+Ans);
}

    function Addition(Value1:number,Value2:number):number
    {
        var ret:number = 0;
        ret = Value1 + Value2;
        return ret;
    }

    main();