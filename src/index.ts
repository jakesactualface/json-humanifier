import { Parser } from './parser';

const parser: Parser = new Parser();
const inputString = '{"test": "value"}';

console.log(parser.parse(inputString));
