function fib(n)
{
  if(n<=1)
  {
    return 1
  }
  const res = fib(n-1)+fib(n-2)
  if(res>=100)
  {
    exit
  }
  console.log(fib(n))
  return res
}

const f = fib(5)