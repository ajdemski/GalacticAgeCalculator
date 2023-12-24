import AgeCalculator from "../src/js/ageCalculator.js";

describe("AgeCalculator", () => {
  test("should correctly instantiate AgeCalculator with name and age", () => {
    const ageCalculator = new AgeCalculator("Aaron", 30);

    expect(ageCalculator).toBeInstanceOf(AgeCalculator);
    expect(ageCalculator.name).toBe("Aaron");
    expect(ageCalculator.age).toBe(30);
  });

  test("should correctly calculate the years passed on each planet based off the user age input", () => {
    const ageCalculator = new AgeCalculator("Aaron", 56);
    const yearsPassedResult = ageCalculator.yearsPassedSinceBirthday(43);

    expect(yearsPassedResult.earth).toBe(13);
    expect(yearsPassedResult.mercury).toBeCloseTo(54.16, 2);
    expect(yearsPassedResult.venus).toBeCloseTo(20.96, 2);
    expect(yearsPassedResult.mars).toBeCloseTo(6.91, 2);
    expect(yearsPassedResult.jupiter).toBeCloseTo(1.09, 2);
  });
});
