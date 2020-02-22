import { ParseResult } from '../src/parseResult';
import { ParseError } from '../src/parseError';

const JSON_STRING = '{ "valid": "JSON"}';
const mockParseError: ParseError = jest.genMockFromModule<ParseError>(
  '../src/parseError'
);

let parseResult: ParseResult;

describe('constructor', () => {
  test('no error provided', () => {
    parseResult = new ParseResult(JSON_STRING);
    expect(parseResult.jsonString).toBe(JSON_STRING);
    expect(parseResult.parseError).toBeNull();
  });

  test('null error provided', () => {
    parseResult = new ParseResult(JSON_STRING, null);
    expect(parseResult.jsonString).toBe(JSON_STRING);
    expect(parseResult.parseError).toBeNull();
  });

  test('populated error provided', () => {
    parseResult = new ParseResult(JSON_STRING, mockParseError);
    expect(parseResult.jsonString).toBe(JSON_STRING);
    expect(parseResult.parseError).toBe(mockParseError);
  });
});
