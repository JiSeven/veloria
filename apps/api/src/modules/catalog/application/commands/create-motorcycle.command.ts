export class CreateMotorcycleCommand {
  constructor(
    public readonly name: string,
    public readonly make: string,
    public readonly model: string,
    public readonly year: number,
    public readonly priceInCents: number,
  ) {}
}
