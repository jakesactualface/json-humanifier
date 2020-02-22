export class ParseError {
  startIndex: number;
  endIndex: number;

  constructor(start: number, end: number) {
    this.startIndex = start;

    if (end < start) {
      end = start;
    }

    this.endIndex = end;
  }
}
