export interface ScentProfileProps {
  top: string[];
  heart: string[];
  base: string[];
}

export class ScentProfile {
  public readonly top: ReadonlyArray<string> = [];
  public readonly heart: ReadonlyArray<string> = [];
  public readonly base: ReadonlyArray<string> = [];

  private constructor(props: ScentProfileProps) {
    this.top = Object.freeze([...props.top]);
    this.heart = Object.freeze([...props.heart]);
    this.base = Object.freeze([...props.base]);
  }

  public static create(props: ScentProfileProps): ScentProfile {
    const top = props.top.map((n) => n.trim());
    const heart = props.heart.map((n) => n.trim());
    const base = props.base.map((n) => n.trim());

    const allNotes = [...top, ...heart, ...base];

    if (allNotes.length === 0) {
      throw new Error(
        'A scent profile must have at least one note across any layer',
      );
    }

    const hasBlank = allNotes.some((n) => n.length === 0);

    if (hasBlank) {
      throw new Error('Scent notes cannot be blank or whitespace-only');
    }

    // Detect cross-layer duplicates — a note cannot appear in two different layers
    // (same note in top AND base is a data modeling error, not a creative choice)
    const seen = new Map<string, string>();

    for (const [layer, notes] of [
      ['top', top],
      ['heart', heart],
      ['base', base],
    ] as const) {
      for (const note of notes) {
        const key = note.toLowerCase();

        const existing = seen.get(key);

        if (existing && existing !== layer) {
          throw new Error(
            `Note "${note}" appears in both "${existing}" and "${layer}" layers. Each note must belong to a single layer.`,
          );
        }

        seen.set(key, layer);
      }
    }

    return new ScentProfile({ top, heart, base });
  }

  public static reconstitute(props: ScentProfileProps): ScentProfile {
    return new ScentProfile(props);
  }

  public hasNote(note: string): boolean {
    const normalized = note.toLowerCase().trim();

    return this.getAllNotes().some((n) => n.toLowerCase() === normalized);
  }

  public getAllNotes(): string[] {
    return [...this.top, ...this.heart, ...this.base];
  }

  public toPlain(): ScentProfileProps {
    return {
      top: [...this.top],
      heart: [...this.heart],
      base: [...this.base],
    };
  }
}
