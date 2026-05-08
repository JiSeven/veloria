export abstract class DomainEvent {
  abstract readonly name: string;
  public readonly occuredAt: Date = new Date();
}
