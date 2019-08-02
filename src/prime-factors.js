export default n => {
  let primes = []
  let m = 2

  while(n > 1) {
    while(n % m == 0) {
      primes.push(m)
      n/=m
    }
    m++
  }

  if(n > 1) {
    primes.push(n)
  }
  return primes
}
