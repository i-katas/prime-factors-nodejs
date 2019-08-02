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

  return primes
}
