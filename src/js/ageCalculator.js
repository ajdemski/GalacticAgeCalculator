export default class AgeCalculator {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  yearsPassedSinceBirthday(pastAge) {
    const yearsPassed = this.age - pastAge;
    return {
      earth: yearsPassed,
      mercury: yearsPassed * 0.24,
      venus: yearsPassed * 0.62,
      mars: yearsPassed * 1.88,
      jupiter: yearsPassed * 11.86,
    };
  }

}

