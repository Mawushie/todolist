import { HighlightOverduePipe } from '../pipes/highlight-overdue.pipe';

describe('HighlightOverduePipe', () => {
  it('create an instance', () => {
    const pipe = new HighlightOverduePipe();
    expect(pipe).toBeTruthy();
  });
});
