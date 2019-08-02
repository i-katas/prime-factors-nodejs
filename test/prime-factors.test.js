import factorsOf from 'prime-factors'

describe('prime factors', () => {
  it('no factors', () => {
    expect(factorsOf(1)).toEqual([])
  })

  it('prime numbers', () => {
    expect(factorsOf(2)).toEqual([2])
    expect(factorsOf(3)).toEqual([3])
  })

  it('composite number that containing same factors', () => {
    expect(factorsOf(4)).toEqual([2, 2])
  })
})
