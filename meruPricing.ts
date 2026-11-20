export function isValidMeruPrice(priceMinor: number) {
  return Number.isInteger(priceMinor) && priceMinor > 0;
}

export function formatMeruPrice(priceMinor: number, currency: string) {
  return `${(priceMinor / 100).toLocaleString()} ${currency}`;
}
