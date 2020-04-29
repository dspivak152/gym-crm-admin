import { ExerciseType } from './exercise-type';

describe('ExerciseType', () => {
  it('should create an instance', () => {
    expect(new ExerciseType({ name: 'pull ups', required: true })).toBeTruthy();
  });
});
