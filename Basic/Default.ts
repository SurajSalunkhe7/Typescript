///Default Arquments

//Number Of Default Argunents are 2
//Default Argument Should Be Trailing(From right to left)
function Demo(no1:number, no2:number=20, no3:number=30)
{
    console.log("Inside Demo");
}

//Demo();       Error
Demo(10);      // no1=10,no2=20,no3=30;
Demo(10,11);   // no1=10,no2=11,no3=30;
Demo(10,11,12) // no1=10,no2=21,no3=12;