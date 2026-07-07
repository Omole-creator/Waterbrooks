import { test, expect } from "@playwright/test";

const routes = [
  { path: "/", heading: /Revolutionizing Food Preservation/i },
  { path: "/about", heading: /We keep good food from going to waste/i },
  { path: "/solutions", heading: /Solar cold storage, made smart/i },
  { path: "/contact", heading: /Let us grow this together/i },
];

test.describe("WaterBrooks site smoke", () => {
  for (const { path, heading } of routes) {
    test(`renders ${path} with its heading and no horizontal scroll`, async ({
      page,
    }) => {
      const errors: string[] = [];
      page.on("console", (msg) => {
        if (msg.type() === "error") errors.push(msg.text());
      });

      await page.goto(path);
      await expect(page.getByRole("heading", { name: heading }).first()).toBeVisible();

      // No horizontal overflow on the body.
      const overflow = await page.evaluate(
        () =>
          document.documentElement.scrollWidth <=
          document.documentElement.clientWidth + 1,
      );
      expect(overflow, "page should not scroll horizontally").toBeTruthy();

      expect(errors, `console errors on ${path}`).toEqual([]);
    });
  }

  test("primary nav links navigate between pages", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "About Us", exact: true }).first().click();
    await expect(page).toHaveURL(/\/about$/);
    await page.getByRole("link", { name: "Solutions", exact: true }).first().click();
    await expect(page).toHaveURL(/\/solutions$/);
    await page.getByRole("link", { name: "Contact", exact: true }).first().click();
    await expect(page).toHaveURL(/\/contact$/);
  });

  test("Partner With Us CTA reaches the contact page", async ({ page }) => {
    await page.goto("/");
    await page
      .getByRole("link", { name: /Partner With Us/i })
      .first()
      .click();
    await expect(page).toHaveURL(/\/contact$/);
  });

  test("contact form has the required fields", async ({ page }) => {
    await page.goto("/contact");
    await expect(page.getByLabel("Full name")).toBeVisible();
    await expect(page.getByLabel("Email address")).toBeVisible();
    await expect(page.getByLabel("Organization type")).toBeVisible();
    await expect(page.getByLabel("Message")).toBeVisible();
  });
});

async function scrollThrough(page: import("@playwright/test").Page) {
  // Trigger every scroll-reveal so the full page renders for the screenshot.
  await page.evaluate(async () => {
    const step = window.innerHeight * 0.7;
    const total = document.body.scrollHeight;
    for (let y = 0; y < total; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 180));
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 300));
  });
}

test("capture desktop and mobile screenshots", async ({ browser }) => {
  for (const { path } of routes) {
    const name = path === "/" ? "home" : path.replace("/", "");

    const desktop = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    await desktop.goto("http://localhost:3000" + path);
    await scrollThrough(desktop);
    await desktop.screenshot({ path: `test-results/${name}-desktop.png`, fullPage: true });
    await desktop.close();

    const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await mobile.goto("http://localhost:3000" + path);
    await scrollThrough(mobile);
    await mobile.screenshot({ path: `test-results/${name}-mobile.png`, fullPage: true });
    await mobile.close();
  }
});
