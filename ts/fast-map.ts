// fastMap has no try-catch or type check statements by design.
// fastMap can throw unexpected Errors/Exceptions

export function fastMap<T>(array: T[], callback: (item: T, i?: number, arr?: T[]) => T): T[] {
  const responseArray = Array(array.length);
  for (let i = 0, len = array.length; i < len; i++) {
    responseArray[i] = callback(array[i], i, array);
  }
  return responseArray;
}