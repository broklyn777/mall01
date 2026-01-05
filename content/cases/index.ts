import type { CaseItem } from "./types";

import { flStudioGuide } from "./fl-studio-guide";
import { ostanaHemservice } from "./ostana-hemservice";
import { media3d } from "./media3d";


export const cases: CaseItem[] = [flStudioGuide, media3d, ostanaHemservice];

export function getCaseBySlug(slug: string): CaseItem | undefined {
  return cases.find((c) => c.slug === slug);
}
