// Express モジュールの読み込み
const express = require('express');

// Express アプリケーションの生成
const app = express();

// パス操作のためのモジュールの読み込み
const path = require('path');

// 静的ファイルの提供
app.use(express.static(path.join(__dirname, 'public')));

// ビューの設定
app.set('views', './views');

// テンプレートエンジンの設定
app.set('view engine', 'ejs');

// ルートへのアクセス処理
app.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

// サーバーの起動
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
