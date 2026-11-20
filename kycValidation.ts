export function hasRequiredKycFiles(input: { documentFrontData?: string; documentBackData?: string; selfieData?: string }) {
  return Boolean(input.documentFrontData && input.documentBackData && input.selfieData);
}
