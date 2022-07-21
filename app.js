//expressの読み込み
const express = require('express');
//expressをを使用するための準備
const app = express();

//publicフォルダ内のファイルを読み込む
app.use(express.static('public'));
app.use(express.static('image'));

app.get('/', (req, res) => {
  res.render('top.ejs');
});

app.get('/form', (req, res) => {
  res.render('form.ejs');
});

//localhost:3000でアクセス可能なサーバーを起動する
app.listen(process.env.PORT || 3000);