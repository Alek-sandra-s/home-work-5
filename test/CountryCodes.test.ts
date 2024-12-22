import { generateCodeEstonia, generateCodeLatvia, generateCodeLithuania } from '../src/CountryCodes'

describe('generateCodeEstonia', () => {
  test('Check code starts with prefix EST-', () => {
    const actualResult = generateCodeEstonia()
    expect(actualResult.startsWith('EST-')).toBeTruthy()
  })
  test('Check Estonia code length equals 8 characters', () => {
    const actualResult = generateCodeEstonia()
    expect(actualResult.length).toBe(8)
  })
  test('Check Estonia code consists of prefix EST- and 4 digits', () => {
    const actualResult = generateCodeEstonia()
    expect(/EST-\d{4}/.test(actualResult)).toBe(true)
  })
})

describe('generateCodeLatvia', () => {
  test('Check code starts with prefix LVA-', () => {
    const actualResult = generateCodeLatvia()
    expect(actualResult.startsWith('LVA-')).toBeTruthy()
  })
  test('Check Latvia code length equals 8 characters', () => {
    const actualResult = generateCodeLatvia()
    expect(actualResult.length).toBe(8)
  })
  test('Check Latvia code consists of prefix LVA- and 4 digits', () => {
    const actualResult = generateCodeLatvia()
    expect(/LVA-\d{4}/.test(actualResult)).toBe(true)
  })
})

describe('generateCodeLithuania', () => {
  test('Check code starts with prefix LTU-', () => {
    const actualResult = generateCodeLithuania()
    expect(actualResult.startsWith('LTU-')).toBeTruthy()
  })
  test('Check Lithuania code length equals 8 characters', () => {
    const actualResult = generateCodeLithuania()
    expect(actualResult.length).toBe(8)
  })
  test('Check Lithuania code consists of prefix LTU- and 4 digits', () => {
    const actualResult = generateCodeLithuania()
    expect(/LTU-\d{4}/.test(actualResult)).toBe(true)
  })
})
