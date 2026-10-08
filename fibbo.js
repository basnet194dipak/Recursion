function fibbonachi(n,a=0,b=1, count=2 )
{
    console.log(a)
    if (n + 1 == count)
    {
        return 
    }
    fibbonachi(n,b,b+a,count+1)
}

fibbonachi(8)

console.log("tie")

let n = 8
let a = 0
let b = 1
console.log(a)
for (let i = 1; i < n  ; i++)
{
    console.log(b)
    let c = a + b
    a = b 
    b = c
}