import AgeCalculator from "../src/js/ageCalculator.js";

describe("AgeCalculator", () => {
  test("should correctly instantiate AgeCalculator with name and age", () => {
    const ageCalculator = new AgeCalculator("Aaron", 56);

    expect(ageCalculator).toBeInstanceOf(AgeCalculator);
    expect(ageCalculator.name).toBe("Aaron");
    expect(ageCalculator.age).toBe(56);
  });

  test("should correctly calculate the years since a past birthday", () => {
    const pastAge = 43;
    const ageCalculator = new AgeCalculator("Aaron", 56);
    const planetYearsPassed = ageCalculator.calculateYearsPassed(pastAge);

    expect(planetYearsPassed.earth).toBe(56 - pastAge);
    expect(planetYearsPassed.mercury).toBeCloseTo((56 - pastAge) * 0.24, 4);
    expect(planetYearsPassed.venus).toBeCloseTo((56 - pastAge) * 0.62, 4);
    expect(planetYearsPassed.mars).toBeCloseTo((56 - pastAge) * 1.88, 4);
    expect(planetYearsPassed.jupiter).toBeCloseTo((56 - pastAge) * 11.86, 4);
  });

  test("should correctly calculate the years until a future birthday", () => {
    const futureAge = 61;
    const ageCalculator = new AgeCalculator("Aaron", 56);
    const planetYearsUntilBirthday = ageCalculator.calculateYearsUntilFutureBirthday(futureAge);

    expect(planetYearsUntilBirthday.earth).toBe(futureAge - 56);
    expect(planetYearsUntilBirthday.mercury).toBeCloseTo((futureAge - 56) * 0.24, 4);
    expect(planetYearsUntilBirthday.venus).toBeCloseTo((futureAge - 56) * 0.62, 4);
    expect(planetYearsUntilBirthday.mars).toBeCloseTo((futureAge - 56) * 1.88, 4);
    expect(planetYearsUntilBirthday.jupiter).toBeCloseTo((futureAge - 56) * 11.86, 4);
  });
});
