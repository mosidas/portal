
import { test, expect } from '@playwright/test';

test.describe('ナビゲーション', () => {
  test('トップページから記事一覧ページに遷移できること', async ({ page }) => {
    await page.goto('/');
    await page.click('a[href="/articles"]');
    await expect(page).toHaveURL('/articles');
    await expect(page.locator('h1')).toHaveText('記事一覧');
  });

  test('トップページからプロジェクト一覧ページに遷移できること', async ({ page }) => {
    await page.goto('/');
    await page.click('a[href="/projects"]');
    await expect(page).toHaveURL('/projects');
    await expect(page.locator('h1')).toHaveText('プロジェクト一覧');
  });
});
