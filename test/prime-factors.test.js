import factorsOf from 'prime-factors'

describe('prime factors', () => {
  it('no factors', () => {
    expect(factorsOf(1)).toEqual([])
  })
})
