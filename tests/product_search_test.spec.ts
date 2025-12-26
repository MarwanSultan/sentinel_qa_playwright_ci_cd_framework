import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  //Validate search functionality.

await page.goto('https://www.amazon.com', { waitUntil: 'domcontentloaded' });

const searchBox = page.locator('#twotabsearchtextbox');
await expect(searchBox).toBeVisible({ timeout: 15000 });
await searchBox.fill('Samsung TV');

});