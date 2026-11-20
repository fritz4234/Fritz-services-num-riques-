export type RechargeReviewStatus = "PENDING" | "VERIFYING" | "APPROVED" | "REJECTED" | "COMPLETED";

export function canReviewRecharge(status: RechargeReviewStatus) {
  return status === "PENDING" || status === "VERIFYING";
}

export type KycReviewStatus = "PENDING" | "UNDER_REVIEW" | "APPROVED" | "REJECTED";

export function canReviewKyc(status: KycReviewStatus) {
  return status === "PENDING" || status === "UNDER_REVIEW";
}
