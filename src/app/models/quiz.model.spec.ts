import { Quiz } from './quiz.model';

describe('Quiz', () => {
  it('should create an instance', () => {
    expect(new Quiz(1, '', [1, 2], 1)).toBeTruthy();
  });
});
