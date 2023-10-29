type Mods = Record<string, boolean | string>; /* Record
спец тип, который указывает в качестве ключа обьектов string,
а в качестве значения либо boolean, либо string */

export function classNames(cls: string, mods: Mods, additional: string[]): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([cls]) => cls),
  ].join(" ");
}
/* classNames("remove-btn", { hovered: true, selectable: true, red: false }, ["pdg"]);
 */

/* замена готовой библиотеки classNames */
