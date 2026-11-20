export const DEFAULT_HTG_PER_USD = 0;
export const DEFAULT_MINIMUM_HTG = 0;

export function convertHtgMinorToUsdMinor(htgMinor: number, htgPerUsdMinor: number) {
  if (!Number.isInteger(htgMinor) || htgMinor <= 0) throw new Error("Le montant HTG doit être supérieur à zéro.");
  if (!Number.isInteger(htgPerUsdMinor) || htgPerUsdMinor <= 0) throw new Error("Le taux de change doit être configuré par l'administrateur.");
  return Math.floor((htgMinor * 100) / htgPerUsdMinor);
}

export function isValidExchangeRate(htgPerUsdMinor: number) {
  return Number.isInteger(htgPerUsdMinor) && htgPerUsdMinor > 0 && htgPerUsdMinor <= 100_000_000;
}

export function isValidMinimumHtgMinor(minimumHtgMinor: number) {
  return Number.isInteger(minimumHtgMinor) && minimumHtgMinor >= 0 && minimumHtgMinor <= 1_000_000_000;
}

export function assertMinimumHtgAmount(htgMinor: number, minimumHtgMinor: number) {
  if (!isValidMinimumHtgMinor(minimumHtgMinor)) throw new Error("Le minimum de conversion est invalide.");
  if (htgMinor < minimumHtgMinor) throw new Error(`Le montant minimum pour convertir est de ${(minimumHtgMinor / 100).toLocaleString()} HTG.`);
}
