import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it } from "vitest";
import ManualCard from "../../src/components/manual-card.astro";

describe("Manual Card", () => {
  it("renders the provided name", async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(ManualCard, {
      props: { name: "Nadia" },
    });

    expect(html).toContain("Nadia");
  });
});