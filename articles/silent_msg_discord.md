---
title: Webhookを用いてdiscordにサイレントメッセージを送信する
emoji: 📬
type: tech
topics: [webhook, Discord]
published: false
---

## 概要

### サイレントメッセージとは
Discordにはサイレントメッセージという、送信するメッセージの先頭に <@silent>という文字列を加えてあげると、相手に通知がいかないという機能
@silentを付けて個別のメンションをすると、DisocordのUI上ではメンションのバッジが表示されるが、通知画面には通知が飛ばない状態となる。

成功するとこんな感じになる
![image](https://github.com/user-attachments/assets/570e550e-276d-466c-a3e9-fa9e324aae1f)
*鈴のアイコンの上でホバーすると「これは「@silent」のメッセージです」と表示される。*

深夜の作業時など、今すぐ相手に通知を飛ばしたくはないが、Discordを開いた時に見逃してほしくない時などがサイレントメッセージの活用場面になる。
このサイレントメッセージを、Webhookを用いたメッセージ送信の際にも適用できるようにしたい

### Webhookとは

Webhookは特定のトリガー（イベント）が発生した際に送信されるHTTPリクエスト。サーバー間でリアルタイムにデータを連携する仕組みとして利用され、手動でデータを取得するAPIとは異なり、自動的にデータが通知される。この仕組みは「インターネットを介した速達便」とイメージすると理解しやすい。

Webhookには主に以下の2種類がある：

Outgoing Webhook
サーバーやアプリケーションが外部の指定されたURLにHTTPリクエストを送信するもの（例：フォームに新しい回答が送信されたとき、通知を送る）。

Incoming Webhook
外部のアプリケーションやサービスから送信されたHTTPリクエストを受け取るもの（例：チャットツールで特定のメッセージが投稿された際に通知を受け取る）。

今回作成すコードはGASにてoutgoing webhookに該当するコードとなる。

## 実装

```js:sample code
function sendSilentMessageToDiscord() {
  const scriptProperties = PropertiesService.getScriptProperties();
  const webhookUrl = scriptProperties.getProperty('DISCORD_WEBHOOK_URL');

  const payload = {
    content: "",
    flags: 4096,
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
上のコードはGASのスクリプトプロパティを使用してwebhookのURLを格納しているので、時の文で定義したいときは以下のように書き換える。

```js
 const webhookUrl = "https://discord.com/api/webhooks/WEBHOOK_ID/WEBHOOK_TOKEN"; // Webhook URLを入れる場所
```


## まとめ
サイレントメッセージ化するには、payloadのオプションとして`flags: 4096`を入れてあげる必要があるよというお話でした。




