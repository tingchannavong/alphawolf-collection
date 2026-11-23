import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it } from "vitest";
import ManualCard from "../../src/components/manual-card.astro";

describe("Manual Card", () => {
  it("should render the manual images if present", async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(ManualCard, {
      props: { manuals: ["/cock1.png", "/cock2.png"] },
    });

    // assert for image src= to have the same as manual string
    expect(html).toContain("/cock1.png");
  });

    it("should render interactive dots based on number of manual images", async () => {
   
  });

});