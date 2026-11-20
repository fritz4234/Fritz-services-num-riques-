export function formatActivityAmount(amountMinor: number, currency: string) {
  return `${(amountMinor / 100).toLocaleString()} ${currency}`;
}
