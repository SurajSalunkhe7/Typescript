function main() {
    var No1 = 25;
    var No2 = 5;
    var Ans = 0;
    Ans = Division(No1, No2);
    console.log("Division Of Two Number:" + Ans);
}
function Division(Value1, Value2) {
    var ret = 0;
    ret = Value1 / Value2;
    return ret;
}
main();
