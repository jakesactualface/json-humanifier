import { InputBuffer } from './inputBuffer';

export class Parser {
  parse(input: string): string {
    const inputBuffer = new InputBuffer(input);
    inputBuffer.pop();

    return '';
  }
}
