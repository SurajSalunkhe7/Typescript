var Ret = 0;
//Regular Function
function Addition1(No1, No2) {
    var Ans = 0;
    Ans = No1 + No2;
    return Ans;
}
Ret = Addition1(10, 11);
console.log("Addition Of Two Numbers:" + Ret);
//Anonymous Function(Function Without Name)
var Addition2 = function (No1, No2) {
    var Ans = 0;
    Ans = No1 + No2;
    return Ans;
};
Ret = Addition2(10, 11);
console.log("Addition Of Two Numbers:" + Ret);
//Fat arrow/Lambda/Arrow Function
var Addition3 = function (No1, No2) {
    var Ans = 0;
    Ans = No1 + No2;
    return Ans;
};
Ret = Addition3(10, 11);
console.log("Addition Of Two Numbers:" + Ret);
