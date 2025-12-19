import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await expect(page.getByRole('link', { name: 'Hello, sign in Account & Lists' })).toBeVisible();
});