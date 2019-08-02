export default n => {
  let primes = []

  for(let m = 2; n > 1; m++) {
    while(n % m == 0) {
      primes.push(m)
      n/=m
    }
  }

  return primes
}
