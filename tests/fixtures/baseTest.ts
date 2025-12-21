import { test as base, expect } from '@playwright/test';

export const test = base.extend({});

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

export { expect };
