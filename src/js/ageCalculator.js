export default class AgeCalculator {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  calculateYearsPassed(pastAge) {
    const earthYearsPassed = this.age - pastAge;
    const planetYearsPassed = {
      earth: earthYearsPassed,
      mercury: earthYearsPassed * 0.24,
      venus: earthYearsPassed * 0.62,
      mars: earthYearsPassed * 1.88,
      jupiter: earthYearsPassed * 11.86,
    };
    return planetYearsPassed;
  }

  calculateYearsUntilFutureBirthday(futureAge) {
    const yearsUntilBirthday = futureAge - this.age;
    const planetYearsUntilBirthday = {
      earth: yearsUntilBirthday,
      mercury: yearsUntilBirthday * 0.24,
      venus: yearsUntilBirthday * 0.62,
      mars: yearsUntilBirthday * 1.88,
      jupiter: yearsUntilBirthday * 11.86,
    };
    return planetYearsUntilBirthday;
  }
}
