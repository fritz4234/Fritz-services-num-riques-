export function getAdminUserRoleLabel(role: "admin" | "user") {
  return role === "admin" ? "Admin" : "Client";
}
