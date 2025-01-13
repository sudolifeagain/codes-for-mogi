---
title: ココピーのスペニット集(Discord/Slack/Google Workspace/Scrapbox)
emoji: 😸
type: tech
topics: [Cocopy, Chrome]
published: false
---

## ココピーとは
無料で使えるChromeの拡張機能。はてなのエンジニアの方制作。詳しくは[js を書いて URL やページの内容を加工してコピーできる Chrome 拡張ココピーのご紹介 - ぽ靴な缶](https://blog.pokutuna.com/entry/introduce-cocopy)を参照。

## Slack・Scrapbox

```
(page) => {
  return {
    html: render('<a href="{{&url}}">{{title}}</a>', page),
    text: `[${page.title.replace(/\s*[\[\]]\s*/g, ' ')} ${page.url}]`,
  };
}
```

## Discord

```
({title, url, content, selectingText, modifier}) => {
  return [`=HYPERLINK("${url}","${title}")`].join(' ');
}
```

## 公式ドキュメント
こちら：[chrome-cocopy/gallery/README.md at master ·](https://github.com/pokutuna/chrome-cocopy/blob/master/gallery/README.md)