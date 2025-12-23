import { test, expect, } from "./fixtures/baseTest";

test("test", async ({ page }) => {

const AMAZON_TITLE_REGEX = new RegExp("^Amazon\\.com");

const title = await page.title();
if (AMAZON_TITLE_REGEX.test(title)) {
  console.log("Title is valid");
}
});



