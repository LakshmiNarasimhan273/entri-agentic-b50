function largerstNum(arr) {
    let large = arr[0];//10
    for (let i = 0; i < arr.length; i++)//0<3 1<3 2<3
    {
        if (arr[i] > large)//10>10 //20>10 30>20
        {
            large = arr[i];//10 20 30
        }
    }
    return large;//10 20 30
}
console.log(largerstNum([10, 20, 30]));//30
console.log(largerstNum([50, 25, 10]));
console.log(largerstNum([5, 3, 2]));
