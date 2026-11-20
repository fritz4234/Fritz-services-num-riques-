export type AccountStatus = "ACTIVE" | "SUSPENDED" | "BLOCKED";

export function isAccountTemporarilyRestricted(status: AccountStatus, until: Date | null | undefined, now = new Date()) {
  return status !== "ACTIVE" && (!until || until > now);
}

export function getAccountStatusLabel(status: AccountStatus, until?: Date | null, now = new Date()) {
  if (!isAccountTemporarilyRestricted(status, until, now)) return "Actif";
  return status === "BLOCKED" ? "Bloqué" : "Suspendu";
}
