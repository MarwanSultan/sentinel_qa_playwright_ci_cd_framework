import { test, expect, } from "./fixtures/baseTest";

test("test", async ({ page }) => {
  await expect(page).toHaveTitle("Amazon.com. Spend less. Smile more.");
});



