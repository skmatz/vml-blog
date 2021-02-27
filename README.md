# vml-blog

このリポジトリは谷口研究室のブログのソースコードです。

研究室の Notion (閲覧権限が必要) でブログ記事を管理しています。  
ブログ記事を Notion から取得し、Next.js の SSG (Static-Site Generation) で HTML を返却します。

## Development

ローカルで開発を行うためには次の手順にしたがって準備が必要です。

まず、プライベートな Notion ページからデータを取得するための環境変数を用意します。

```bash
git clone https://github.com/skmatz/vml-blog.git
cd vml-blog
cp .env.sample .env
```

コピーした `.env` ファイルを開き、`NOTION_TOKEN` と `BLOG_INDEX_ID` を入力します。

- `NOTION_TOKEN`: Notion を開き、開発者ツールから「Application -> Storage -> Cookies -> `https://www.notion.so` -> `token_v2`」の値です。
- `BLOG_INDEX_ID`: ブログ記事が書いてある Notion ページ (表のページではなく、一番 root のページ) の URL からタイトルの prefix を取り除いた値です (e.g. `https://www.notion.so/blog-abc123` だったら `abc123` の部分)。

次に、ソースコードのビルドを行います。  
Docker を使う方法とローカルの Node.js を使う方法があります。

**Docker を使う方法**

Requirements:

- Docker 19.03.0+
- Docker Compose

```bash
docker-compose up
```

ブラウザで <http://localhost:3000> にアクセスします。

**ローカルの Node.js を使う方法**

Requirements:

- Node.js 14.15.0+
- Yarn

```bash
yarn install
yarn dev
```

ブラウザで <http://localhost:3000> にアクセスします。

## Deployment

本番環境には Vercel を用いています。  
Next.js の SSG に対応しているホスティングサービスであれば何でも良いです。  
現状では、Vercel のチームプランは有料なので、代表者一名のアカウントに紐づけてホスティングをします。

改めてデプロイする必要がある場合、[Vercel](https://vercel.com) から「New Project -> Import Git Repository」をしてリポジトリを選択し、環境変数の設定 (`.env` と同じ) をしてからデプロイをするだけです。

## Maintenance

GitHub および Vercel は個人アカウントで管理する必要があります。  
GitHub Organization を使う場合は Vercel もチームプランを使う必要があるためです。

現状の設定では、Vercel の CI/CD によって GitHub の push/pull request に紐付いて自動でデプロイが走ります。  
そのため、研究室の代表者 (GitHub や Vercel の扱いに慣れている人だと良い) が GitHub リポジトリと Vercel プロジェクトを管理し、世代交代の際にはそれぞれ移植を行います。

## Contribution

研究室のメンバーからの任意の要望やバグ修正、デザインの変更は歓迎です。  
できるだけ詳細に説明した issue を立てるか、変更点を明記した pull request を送ってください。
