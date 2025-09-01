import { test, expect } from '@playwright/test';

test('トップページが表示されること', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/gobbledygook/);
});