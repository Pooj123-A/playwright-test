import { test, expect } from "@playwright/test";

test.describe("Example Test Suite", () => {
  test("should have the correct page title", async ({ page }) => {
    // Navigate to the website
    await page.goto("https://example.com");

    // Expect the title to be "Example Domain"
    await expect(page).toHaveTitle("Example Domain");
  });
});
