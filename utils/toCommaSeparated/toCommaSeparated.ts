/**
 * Formats a value to be comma separated
 * 
 * @param value The value to comma separate
 */
export function toCommaSeparated(value: string) {
  return Number(value).toLocaleString("en-GB");
}
