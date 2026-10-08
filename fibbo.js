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