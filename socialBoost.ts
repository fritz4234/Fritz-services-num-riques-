export type SocialPlatform = "Facebook" | "TikTok";

export const BOOSTAGE_DAILY_PRICE_HTG = 160;
export const BOOSTAGE_MIN_DAYS = 1;
export const BOOSTAGE_MAX_DAYS = 30;

export function calculateBoostageTotal(days: number) {
  if (!Number.isInteger(days) || days < BOOSTAGE_MIN_DAYS || days > BOOSTAGE_MAX_DAYS) {
    throw new Error(`La durée doit être comprise entre ${BOOSTAGE_MIN_DAYS} et ${BOOSTAGE_MAX_DAYS} jours.`);
  }
  return days * BOOSTAGE_DAILY_PRICE_HTG;
}

export function buildBoostWhatsAppMessage(input: { platform: SocialPlatform; link: string; service: string; phone: string; days: number; totalHtg: number }) {
  return [
    "Bonjour FRITZ CASH, je souhaite un service de boostage.",
    `Plateforme : ${input.platform}`,
    `Lien : ${input.link}`,
    `Service demandé : ${input.service}`,
    `Numéro de contact : ${input.phone}`,
    `Durée : ${input.days} jours`,
    `Total estimé : ${input.totalHtg.toLocaleString()} HTG`,
  ].join("\n");
}
