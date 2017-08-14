import { InitialLetterCapitalizePipe } from './initial-letter-capitalize-pipe';

describe('Pipe InitialLetterCapitalizePipe', () => {
  let pipe: InitialLetterCapitalizePipe;

  beforeEach(() => {
    pipe = new InitialLetterCapitalizePipe();
  });

  it('transforms "abc" to "Abc"', () => {
    expect(pipe.transform('abc')).toEqual('Abc');
  });

  it('transforms "abc def" to "Abc def', () => {
    expect(pipe.transform('abc def')).toEqual('Abc def');
  });

  it('leaves "Abc" unchanged', () => {
    expect(pipe.transform('Abc')).toEqual('Abc');
  });
});
