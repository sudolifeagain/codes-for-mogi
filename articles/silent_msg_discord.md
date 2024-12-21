---
title: Webhookを用いてdiscordにサイレントメッセージを送信する
emoji: 📬
type: tech
topics: [webhook, Discord]
published: false
---

## 概要

### サイレントメッセージとは
Discordにはサイレントメッセージという、送信するメッセージの先頭に <@silent>という文字列を加えてあげると、相手に通知がいかないというもの。
@silentを付けて個別のメンションをすると、DisocordのUI上ではメンションのバッジが表示されるが、通知画面には通知が飛ばない状態となる。

成功するとこんな感じになる
![image](https://github.com/user-attachments/assets/570e550e-276d-466c-a3e9-fa9e324aae1f)
*鈴のアイコンの上でホバーすると「これは「@silent」のメッセージです」と表示される。*

このサイレントメッセージを、Webhookを用いたメッセージ送信の際にも適用できるようにしたい

### Webhookとは

特定のトリガーによって送信されるHTTPリクエスト。
インターネットを介して走る速達便みたいなイメージ。
紐づけられたURLに向けてデータを送信するOutgoing Webhookと、送られてきたWebhookを受け取るIncoming Webhookの二種類がある。

## 実装

```js:sample code
function sendSilentMessageToDiscord() {
  const webhookUrl = "https://discord.com/api/webhooks/WEBHOOK_ID/WEBHOOK_TOKEN"; // Webhook URLを入れる場所

  const payload = {
    content: "", // contentはいったん空にしてある 好きに設定すると良い
    flags: 4096  // 4096フラグで通知をサイレントに設定
  };

  const options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload),
  };

  try {
    const response = UrlFetchApp.fetch(webhookUrl, options);
    Logger.log("サイレントメッセージが送信されました: " + response.getContentText());
  } catch (error) {
    Logger.log("エラーが発生しました: " + error.message);
  }
}
```

要するにpayloadのオプションとして`flags: 4096`を入れてあげればサイレントメッセージになるよというだけのお話でした



