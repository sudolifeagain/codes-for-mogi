


## 概要
フォームの回答数をトリガーにしてgoogleフォームを自動で締め切りたい

## 実装
- フォームの編集画面からスクリプトエディタに移動し、以下のコードを張り付ける
```gas:endFormCheck.gs
function endFormCheck() {
  var LIMIT_NUMBER = 200; 
  var answer = FormApp.getActiveForm();

 if (answer.getResponses().length >= LIMIT_NUMBER) {
    answer.setAcceptingResponses(false);
  }
}

```
- 上限値`(LIMIT_NUMBER)`は手動で入れ替えてください。
  -  変数で定義すれば動的に上限値を変更することもできそう
- トリガー設定画面からトリガーを追加する
  - 実行する関数：endFormCheck
  - デプロイ時に実行：Head
  - イベントのソースを選択：フォームから
  - イベントの種類を選択：フォーム送信時
<br/>
  以上

## 感想
 - 思っていた数倍簡単だった
   ※参考にさせていただいたサイト：https://b.qrqrq.com/2023/01/17/google-form_function-num-of-people/
 - 機能を追加していくなら何があるか
   - フォームの回答を締め切った場合にdiscordに通知を投げたい
     - webhookかな
     - チャンネルだといろんな人に通知行ってしまうので、スレッドが好ましい
