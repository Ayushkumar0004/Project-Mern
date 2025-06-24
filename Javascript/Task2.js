function a(p1, p2, p3)
{
    console.log(p1 + p2 + p3);
}
a(1, 2, 4);

function b(p1)
{
    if(p1 >= 18)
    {
        console.log("You are an adult.");
    }
    else
    {
        console.log("You are a minor.");
    }
}
b(15);

let c = function(p1, p2)
{
    return p1 * p2;
}
console.log(c(3, 4));