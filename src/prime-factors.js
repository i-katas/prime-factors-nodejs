export default n => {
  let primes = []
  let m = 2

  if(n > 1) {
    while(n % m == 0) {
      primes.push(m)
      n/=m
    }
  }

  if(n > 1) {
    primes.push(n)
  }
  return primes
}
