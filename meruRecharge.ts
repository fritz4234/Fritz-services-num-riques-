export const MERU_RECHARGE_MIN_USD_MINOR = 500;
export const MERU_RECHARGE_FEE_USD_MINOR = 100;

export function calculateMeruRechargeTotal(amountUsdMinor: number) {
  return amountUsdMinor + MERU_RECHARGE_FEE_USD_MINOR;
}

export function isValidMeruRechargeAmount(amountUsdMinor: number) {
  return Number.isInteger(amountUsdMinor) && amountUsdMinor >= MERU_RECHARGE_MIN_USD_MINOR;
}

export function formatMeruRechargeAmount(amountUsdMinor: number) {
  return `${(amountUsdMinor / 100).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD`;
}
