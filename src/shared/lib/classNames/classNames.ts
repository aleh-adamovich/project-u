type Mods = Record<string, string | boolean>;

export const classNames = (cls: string, additional: string[] = [], mods: Mods = {}): string => [
  cls,
  ...additional,
  ...Object.entries(mods)
    .filter(([_, value]) => Boolean(value))
    .map(([className, _]) => className),
].join(' ');
