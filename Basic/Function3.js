var no1 = 10;
var no2 = 11;
var ret;
ret = Addition(no1, no2);
console.log("Addition is:" + ret);
function Addition(Value1, Value2) {
    var ans = 0;
    ans = Value1 + Value2;
    return ans;
}
function main() {
    var no1 = 22;
    var no2 = 22;
    var ans = 0;
    ans = Add(no1, no2);
    console.log("Addition Is :" + ans);
}
function Add(value1, value2) {
    var ret = 0;
    ret = value1 + value2;
    return ret;
}
main();
