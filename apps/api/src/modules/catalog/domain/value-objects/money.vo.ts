const ISO_4217_REGEX = /^[A-Z]{3}$/;

export class Money {
  private constructor(
    public readonly amount: number,
    public readonly currency: string,
  ) {}

  public static of(amount: number, currency: string): Money {
    if (!Number.isFinite(amount) || amount <= 0) {
      throw new Error(
        `Price amount must be a positive number, received: ${amount}`,
      );
    }

    if (!ISO_4217_REGEX.test(currency)) {
      throw new Error(
        `Currency must be a 3-letter ISO 4217 code (e.g. EUR, USD), received: "${currency}"`,
      );
    }

    // Round to 2 decimal places to avoid floating point drift
    return new Money(Math.round(amount * 100) / 100, currency);
  }

  public isGreaterThan(other: Money): boolean {
    this.assertSameCurrency(other);

    return this.amount > other.amount;
  }

  public equals(other: Money): boolean {
    return this.amount === other.amount && this.currency === other.currency;
  }

  public toPlain(): { amount: number; currency: string } {
    return {
      amount: this.amount,
      currency: this.currency,
    };
  }

  private assertSameCurrency(other: Money): void {
    if (this.currency !== other.currency) {
      throw new Error(
        `Cannot compare Money of different currencies: ${this.currency} vs ${other.currency}`,
      );
    }
  }
}
