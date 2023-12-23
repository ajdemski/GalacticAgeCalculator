import AgeCalculator from '../src/js/ageCalculator.js';

describe('AgeCalculator', () => {

  test('should correctly instantiate AgeCalculator with name and age', () => {
    const ageCalculator = new AgeCalculator('Aaron', 30);
    expect(ageCalculator).toBeInstanceOf(AgeCalculator);
    expect(ageCalculator.name).toBeUndefined();
    expect(ageCalculator.age).toBe(30);
  });

});
