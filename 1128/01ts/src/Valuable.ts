import { Ivaluable } from "./IValuable";

export class Valuable<T> implements Ivaluable<T> {
  constructor(public value: T) {}
}

export {Ivaluable}