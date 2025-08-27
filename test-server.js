const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <h1>テストサーバー</h1>
    <p>美加の台所 - Mika's Kitchen サイトは正常にビルドされました</p>
    <p>メインサイトにアクセスするには、<a href="http://localhost:3000">http://localhost:3000</a> を試してください</p>
    <p>また、プロジェクトディレクトリで以下のコマンドを実行してください：</p>
    <pre>npm run dev</pre>
  `);
});

server.listen(8080, () => {
  console.log('テストサーバーが http://localhost:8080 で起動しました');
});