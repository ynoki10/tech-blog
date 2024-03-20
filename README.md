## npm-scripts

| Script     | Description                                       |
| ---------- | ------------------------------------------------- |
| dev        | Next.js を開発モードで実行                        |
| build      | プロジェクトのビルド                              |
| start      | Next.js の本番サーバーを起動                      |
| lint       | ESLintの実行                                      |
| lint:fix   | ESLintを実行し、可能な箇所は修正する              |
| prettier   | Prettierでファイルをフォーマットする              |
| markuplint | Markuplintで.ts .tsx のマークアップをチェックする |
| secretlint | 秘匿情報が含まれていないかチェックする            |

## 記事の設定

- `data/articles`に.mdxファイルを追加する
- ファイル名がslugに使用される
- Frontmatterの設定は次の通り

```
---
title: ◯◯を使ってxxする方法          // タイトル
date: 2024-01-30                  // 投稿日
summary: ◯◯を使ってxxする方法を紹介。 // description
tags:                             // タグを指定（複数指定可・slugではなくlabelを使う）
  - HTML
  - CSS
draft: true                       // 下書き指定（記載しなければ通常公開）
---
```

## タグの設定

`data/tags.ts`で定義
