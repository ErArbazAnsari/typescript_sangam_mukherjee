// exclude <U,V> -> remove frmo U those member assinalble to V
// Extract<U, V> -> keep from U those members assiable to V
// Nonnullable

type Type1 = "click" | "submit" | "hover" | "keydown" | "keyup";
type Type2 = Exclude<Type1, "keydown">;

type Type3 = Extract<Type1, "click" | "keyup">;
const dataExam: Type3 = "click";
const dataExam1: Type3 = "keyup";

// nonNullable
type MayBeANumber = number | null | undefined;
type NewCons = NonNullable<MayBeANumber>;

const testing1: NewCons = 12;
