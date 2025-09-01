---
title: "Playwrightを導入する"
date: "2025-09-01"
tags: ["Web", "Astro", "TypeScript", "Playwright"]
description: "Playwrightを使用してAstroで作成したサイトのE2Eテストを自動化する方法を紹介します。"
draft: true
---

備忘録として書いておきます。

- Playwrightのインストール
- テストの作成
- テストの実行

## Playwrightのインストール

```sh
npm init playwright@latest -- --quiet --gha --install-deps --lang=ts
```

## テストの作成

```ts
import { test, expect } from '@playwright/test';

test('homepage has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Welcome/);
});
```

## テストの実行

```sh
npx playwright test
```

