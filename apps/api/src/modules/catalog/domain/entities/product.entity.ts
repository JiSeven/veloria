export interface ScentProfile {
  top: string[];
  heart: string[];
  base: string[];
}

export class ProductEntity {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly description: string,
    public readonly brand: string,
    public readonly price: number,
    public readonly scentProfile: ScentProfile,
  ) {
    if (price < 0) {
      throw new Error('The price cannot be negative');
    }
  }

  public get isPremium(): boolean {
    return this.price > 100;
  }

  public hasNote(note: string): boolean {
    const allNotes = [
      ...this.scentProfile.top,
      ...this.scentProfile.heart,
      ...this.scentProfile.base,
    ];
    return allNotes.some((n) => n.toLowerCase() === note.toLowerCase());
  }
}
