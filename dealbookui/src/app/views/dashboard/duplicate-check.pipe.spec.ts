import { DuplicateCheckPipe } from './duplicate-check.pipe';

describe('DuplicateCheckPipe', () => {
  it('create an instance', () => {
    const pipe = new DuplicateCheckPipe();
    expect(pipe).toBeTruthy();
  });
});
