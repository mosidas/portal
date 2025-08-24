---
title: "Astroでポータルサイトを作る"
date: "2025-08-24"
tags: ["Astro", "Web開発", "TypeScript"]
description: "AstroフレームワークとTailwind CSSを使用してモダンなポータルサイトを構築する方法を紹介します。"
draft: true
---

Astroフレームワークを使ってポータルサイトを構築する方法を紹介します。静的サイト生成の高速性とモダンな開発体験を両立できる優れたフレームワークです。

## Astroの特徴

Astroは以下のような特徴を持つ静的サイトジェネレーターです：

- **アイランドアーキテクチャ**: 必要な部分のみをハイドレートすることで高速なサイトを実現
- **ゼロJS by default**: デフォルトでクライアントサイドJavaScriptを送信しない
- **フレームワーク非依存**: React、Vue、Svelte等を組み合わせて使用可能
- **Content Collections**: Markdownファイルを型安全に管理

## セットアップ

プロジェクトの初期化は以下のコマンドで行います：

```bash
npm create astro@latest my-portal-site
cd my-portal-site
npm install
```

## Content Collectionsの設定

記事管理にはContent Collectionsを使用します。`src/content/config.ts`で記事のスキーマを定義：

```typescript
import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    description: z.string().optional(),
  }),
});
```

## まとめ

Astroを使うことで、パフォーマンスが高く保守性の良いポータルサイトを効率的に構築できます。次回は具体的なページ実装について解説します。
