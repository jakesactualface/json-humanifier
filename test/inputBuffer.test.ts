import { InputBuffer } from '../src/inputBuffer';
const EMPTY_STRING = '';
const SINGLE_CHARACTER_STRING = 'A';

let inputBuffer: InputBuffer;

describe('pop', () => {
  test('empty input returns empty string at index 0', () => {
    inputBuffer = new InputBuffer(EMPTY_STRING);
    const result: [number, string] = inputBuffer.pop();
    expect(result).toStrictEqual([0, EMPTY_STRING]);
  });

  test('buffer with one character returns that character at index 0', () => {
    inputBuffer = new InputBuffer(SINGLE_CHARACTER_STRING);
    const result: [number, string] = inputBuffer.pop();
    expect(result).toStrictEqual([0, SINGLE_CHARACTER_STRING]);
  });

  test('buffer removes popped characters and increments index', () => {
    inputBuffer = new InputBuffer(SINGLE_CHARACTER_STRING);
    const popResult1: [number, string] = inputBuffer.pop();
    const popResult2: [number, string] = inputBuffer.pop();
    expect(popResult1).toStrictEqual([0, SINGLE_CHARACTER_STRING]);
    expect(popResult2).toStrictEqual([1, EMPTY_STRING]);
  });
});
