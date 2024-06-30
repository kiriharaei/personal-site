const path = require('path');

module.exports = {
  siteUrl: 'https://www.akagi-eiji.net/', // 自分のサイトのURLに置き換えてください
  generateRobotsTxt: true, // ロボットテキストファイルも生成する場合はtrueに設定
  exclude: [], // サイトマップから除外するパスを指定します
  // その他の設定オプションを追加できます
  pagesConfig: {
    '/src/app/*': {
      changefreq: 'daily', // 変更頻度を設定（任意）
      priority: 0.7, // 優先度を設定（0.0から1.0の間、任意）
    },
    // 他のページの設定を必要に応じて追加
  },
};