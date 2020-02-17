import { getCurrencies } from './getCurrencies'

describe('getCurrencies', () => {
  it('should be return true if it contains USD', () => {
    expect(getCurrencies()).toContain('USD');
  })
})
