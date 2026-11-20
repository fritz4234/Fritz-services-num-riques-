export const CARD_MINIMUM_USD_MINOR = 1200;
export const CARD_HTG_PER_USD = 142;
export const CARD_MINIMUM_HTG_MINOR = CARD_MINIMUM_USD_MINOR * CARD_HTG_PER_USD;

export function hasCardRequestBalance(wallets: { currency: string; balanceMinor: number }[] | undefined) {
  if (!wallets) return false;
  return wallets.some((wallet) =>
    (wallet.currency === "USD" && wallet.balanceMinor >= CARD_MINIMUM_USD_MINOR) ||
    (wallet.currency === "HTG" && wallet.balanceMinor >= CARD_MINIMUM_HTG_MINOR),
  );
}
