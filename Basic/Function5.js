function main() {
    var no = 12;
    var bret;
    bret = CheckEvent(no);
    if (bret == true) {
        console.log("It is Event Number");
    }
    else {
        console.log("It is Odd Number");
    }
}
function CheckEvent(Value) {
    if ((Value % 2) == 0) {
        return true;
    }
    else {
        return false;
    }
}
main();
