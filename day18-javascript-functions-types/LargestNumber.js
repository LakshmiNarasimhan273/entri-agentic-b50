function largerstNum(x,y,z) 
{
    if(x>y && x>z)//10>20 && 10>30
    {
        console.log("x is largest number",x)
    }
    else if(y>z)//20>30
    {
        console.log("y largest number",y)
    }
    else{
        console.log("z is largest number",z)//30
    }
    
}
largerstNum(10,20,30);
largerstNum(50, 25, 10);
largerstNum(5, 3, 2);
