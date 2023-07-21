# next-auth-tutorial

[【NextAuth.js 入門】認証機能から認証情報によるページの表示制御を学ぶ（Next.js & Typescript）](https://zenn.dev/farstep/books/7a6eb67dd3bf1f)
をやってみました。(2023-07)

## メモ

- Next.js 13 でやったけど pages dirctory (app dirctoryでない)。
  - これをやってみる。[Setup and Use NextAuth.js in Next.js 13 App Directory 2023](https://codevoweb.com/setup-and-use-nextauth-in-nextjs-13-app-directory/)
- Windows11でWSL2

## アレンジしたところメモ

- `.env*` の扱い。[Configuring: Environment Variables | Next.js](https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables) にもある通り、`.env*.local`が秘密情報。これはgit-crypt使った。ので、decryptしないと実行できません。
- とりあえずdev環境用に `NODE_TLS_REJECT_UNAUTHORIZED=0` を追加した。これ無いと `This action with HTTP GET is not supported by NextAuth.js` になる。
- eslintをtrueにしたら`<Link>`の中に`<a>`があるとこで文句言われたので直した。
- `import '@/'` に変えたとこ多数。
