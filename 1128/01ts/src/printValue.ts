import { Valuable, Ivaluable } from "./Valuable";

export const printValue = <T>(o: Ivaluable<T>): void => console.log(o.value);
export { Ivaluable, Valuable };
