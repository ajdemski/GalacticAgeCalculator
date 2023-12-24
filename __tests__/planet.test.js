import AgeCalculator from "../src/js/ageCalculator.js";

describe("AgeCalculator", () => {
  test("should correctly instantiate AgeCalculator with name and age", () => {
    const ageCalculator = new AgeCalculator("Aaron", 56);

    expect(ageCalculator).toBeInstanceOf(AgeCalculator);
    expect(ageCalculator.name).toBe("Aaron");
    expect(ageCalculator.age).toBe(56);
  });

  test("should return planet years passed based off the user input", () => {
    const pastAge = 43;
    const ageCalculator = new AgeCalculator("Aaron", 56);
    const planetYearsPassed = ageCalculator.calculateYearsPassed(pastAge);

    expect(planetYearsPassed.earth).toBe(56 - pastAge);
    expect(planetYearsPassed.mercury).toBeCloseTo((56 - pastAge) * 0.24, 2);
    expect(planetYearsPassed.venus).toBeCloseTo((56 - pastAge) * 0.62, 2);
    expect(planetYearsPassed.mars).toBeCloseTo((56 - pastAge) * 1.88, 2);
    expect(planetYearsPassed.jupiter).toBeCloseTo((56 - pastAge) * 11.86, 2);
  });
});
