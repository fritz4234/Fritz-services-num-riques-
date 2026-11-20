export function getAvatarInitials(name?: string | null) {
  const initials = (name ?? "Client").trim().split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]?.toUpperCase()).join("");
  return initials || "C";
}
