export class InputBuffer {
  input: string;
  private buffer: string;
  private index = 0;

  constructor(input: string) {
    this.input = input;
    this.buffer = input;
  }

  pop(): [number, string] {
    if (this.buffer.length === 0) {
      return [this.index, ''];
    }

    const result: [number, string] = [this.index, this.buffer.charAt(0)];
    this.buffer = this.buffer.slice(1);
    this.index++;

    return result;
  }
}
