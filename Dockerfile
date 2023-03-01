# ベースとなる Docker イメージの指定
FROM node:14

# 作業ディレクトリの指定
WORKDIR /app

# package.json ファイルのコピー
COPY package*.json ./

# 依存パッケージのインストール
RUN npm install

# アプリケーションファイルのコピー
COPY . .

# コンテナのポート番号の指定
EXPOSE 3000

# アプリケーションの起動コマンドの指定
CMD [ "npm", "start" ]
