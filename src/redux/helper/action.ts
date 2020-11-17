export interface IAction<T extends string> {
  readonly type: T;
}

export interface IActionPayload<T extends string, P> extends IAction<T> {
  readonly payload: P;
}

export function createAction<T extends string>(type: T): IAction<T>;

export function createAction<T extends string, P>(type: T, payload: P): IActionPayload<T, P>;

export function createAction<T extends string, P>(
  type: T,
  payload?: P
): IAction<T> | IActionPayload<T, P> {
  return payload === undefined ? { type } : { type, payload };
}
