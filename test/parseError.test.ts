import { ParseError } from '../src/parseError';

const LOW_NUMBER = 1;
const HIGH_NUMBER = 10;

let parseError: ParseError;

describe('constructor', () => {
  test('start comes before end', () => {
    parseError = new ParseError(LOW_NUMBER, HIGH_NUMBER);
    expect(parseError.startIndex).toBe(LOW_NUMBER);
    expect(parseError.endIndex).toBe(HIGH_NUMBER);
  });

  test('start matches end', () => {
    parseError = new ParseError(LOW_NUMBER, LOW_NUMBER);
    expect(parseError.startIndex).toBe(LOW_NUMBER);
    expect(parseError.endIndex).toBe(LOW_NUMBER);
  });

  test('start comes after end', () => {
    parseError = new ParseError(HIGH_NUMBER, LOW_NUMBER);
    expect(parseError.startIndex).toBe(HIGH_NUMBER);
    expect(parseError.endIndex).toBe(HIGH_NUMBER);
  });
});
