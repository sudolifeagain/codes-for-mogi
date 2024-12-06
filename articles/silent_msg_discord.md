---
title: Webhookを用いてdiscordにサイレントメッセージを送信する
emoji: 💌
type: tech
topics: [webhook, Discord]
published: false
---

## 概要
Discordにはサイレントメッセージという、送信するメッセージの先頭に <@silent>という文字列を加えてあげると、相手に通知がいかないというもの。
@silentを付けて個別のメンションをすると、DisocordのUI上ではメンションのバッジが表示されるが、通知画面には通知が飛ばない状態となる。

成功するとこんな感じになる
![image](https://github.com/user-attachments/assets/570e550e-276d-466c-a3e9-fa9e324aae1f)
*鈴のアイコンの上でホバーすると「これは「@silent」のメッセージです」と表示される。*



