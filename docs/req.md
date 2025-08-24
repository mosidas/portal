# 🚀 ポータルサイト仕様書（Astro / GitHub Pages）

## 1. サイト概要

- **目的**
  - 学習記録やアウトプットをまとめるポータルサイト
  - 記事投稿（ブログ形式）とプロジェクトリンク集の2本柱
- **利用技術**
  - フレームワーク: [Astro](https://astro.build/)
  - ホスティング: GitHub Pages
- **スタイル**
  - シンプル & ミニマルなデザイン
  - 白背景＋黒文字、装飾少なめ

---

## 2. ページ構成

### 2.1 トップページ (`index.astro`)

- サイトタイトル
- メニューリンク

  - Articles
  - Projects
- 簡単な自己紹介

---

### 2.2 記事投稿ページ

#### 一覧ページ (`articles.astro`)

- 表示内容

  - タイトル（クリックで詳細ページへ）
  - 投稿日
  - タグ（バッジ形式）
  - 本文の **最初の段落*- をサマリーとして表示
- 並び順: 投稿日の新しい順
- UIイメージ

  ```
  ## Astroでポータルサイトを作る
  2025-08-24 | #Astro #Web開発
  → ここに本文の最初の段落がそのまま表示される。
  [続きを読む]
  ```

#### 詳細ページ (`[slug].astro`)

- 表示内容

  - タイトル
  - 投稿日
  - タグ
  - 本文全文
- URL例

  - `/articles/astro-portal`
  - `/articles/my-second-post`

#### 記事データの管理

- ディレクトリ: `src/content/articles/`
- 記事はMarkdownファイルで管理
- フロントマター例

  ```markdown
  ---
  title: "Astroでポータルサイトを作る"
  date: "2025-08-24"
  tags: ["Astro", "Web開発"]
  ---

  この記事ではAstroを使ってポータルサイトを構築する方法を紹介する。
  最初の段落がサマリーとして記事一覧に出る。

  ここから先は記事の本文が続く。
  ```

---

### 2.3 プロジェクトリンクページ (`projects.astro`)

- **表示内容**

  - プロジェクト名（クリックで外部リンクへ）
  - 概要（短い説明文）
  - タグ（バッジ形式）
  - 任意で公開日
- **データ管理**

  - JSONファイル (`src/content/projects.json`) にまとめる

  ```json
  [
    {
      "title": "TPS Action Game Spec Viewer",
      "url": "https://tps-rm6u.vercel.app/",
      "description": "自作ゲームの仕様書を公開するWebアプリ。",
      "tags": ["Game", "Spec"],
      "date": "2025-08-20"
    },
    {
      "title": "Another Project",
      "url": "https://example.com/",
      "description": "Markdown管理のブログ生成ツール。",
      "tags": ["Web", "Tool"],
      "date": "2025-08-10"
    }
  ]
  ```

---

## 3. デザイン仕様

- **共通レイアウト*- (`BaseLayout.astro`)
  -  ヘッダー: サイトタイトル + ナビゲーション 
  -  フッター: コピーライト、GitHubリンク程度
- **フォント**
  - Noto Sans JP
- **装飾**

  - 記事タイトルは大きめ見出し
  - タグはシンプルなバッジ（小さいラベル）
- **ページスタイル**

  - 記事一覧 → タイトル＋メタ情報＋最初の段落
  - プロジェクト一覧 → シンプルなリスト形式（ul/li）

---

## 4. 運用フロー

1. 記事を追加したいとき

   - `src/content/articles/` にMarkdownファイルを追加
   - pushすると自動で記事一覧に反映
2. プロジェクトを追加したいとき

   - `projects.json` にオブジェクトを追加
   - pushすると自動で一覧に反映
3. デプロイ

   - GitHub ActionsでGitHub Pagesへ自動デプロイ

---

## 5. 今後の拡張案

- タグ別一覧ページ `/tags/{tag}`
- 記事検索機能
- RSSフィード生成
- プロジェクトのタグフィルター
