import { ParseError } from './parseError';

export class ParseResult {
  jsonString: string;
  parseError: ParseError | null;

  constructor(json: string, error: ParseError | null = null) {
    this.jsonString = json;
    this.parseError = error;
  }
}
