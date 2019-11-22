import { FindByNamePipe } from './find-by-name.pipe';

describe('FindByNamePipe', () => {
  it('create an instance', () => {
    const pipe = new FindByNamePipe();
    expect(pipe).toBeTruthy();
  });
});
