## yarn スクリプト
| スクリプト名 | 説明 |
|------------|-----|
|`yarn install` |package.json yarn.lock に記載されているパッケージをインストールする。|
|`yarn build` |Webpackを使用してファイルをバンドルする|
|`yarn start` |開発用サーバーを立ち上げる|
|`yarn lint` |コードフォーマットのチェック|

## ディレクトリ構造


```
.
├── README.md
├── src
│   ├── components
│   │   ├── Access　// アクセスページ
│   │   ├── Account // アカウントページ
│   │   ├── App.tsx // 全ての子コンポーネントの親
│   │   ├── Auth // 認証ページ
│   │   ├── BusInfo // バス情報ページ
│   │   ├── Home // ホームページ
│   │   ├── Login // ログインページ
│   │   ├── Project // 企画ページ
│   │   └── common //各ページの共通部分
│   └── index.tsx
├── static
│   └── index.html // バンドルするときのエントリーポイント
├── tsconfig.eslint.json // eslintの設定ファイル
├── tsconfig.json // TypeScriptの設定ファイル
├── webpack.config.js // webpackの設定ファイル
├── yarn.lock // 依存関係を管理するファイル
└── package.json // yarn.lockと同じ


```

