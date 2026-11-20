export function canRequestWithdrawal(balanceMinor: number, amountMinor: number) {
  return Number.isInteger(balanceMinor) && Number.isInteger(amountMinor) && balanceMinor >= 0 && amountMinor > 0 && amountMinor <= balanceMinor;
}
