import { describe, expect, it } from "vitest";
import { sum } from "./sum";

describe("sum", () => {
  it("returns 4 when a=2 and b=2", () => {
    expect(sum(2, 2)).toBe(4);
  });

  it("returns 0 when a=-1 and b=1", () => {
    expect(sum(-1, 1)).toBe(0);
  });
});
