
---
title: "【模擬国連】funDRの回答を自動で結合するスクリプト" # 記事のタイトル
emoji: "✏️" # アイキャッチとして使われる絵文字（1文字だけ）
type: "tech" # tech: 技術記事 / idea: アイデア記事
topics: ["スプレッドシート", "googleフォーム", "GAS"] # タグ。["markdown", "rust", "aws"]のように指定する
published: true # false（falseにすると下書き）
---

## プレビュー
これが![image](https://github.com/user-attachments/assets/1dac5ec9-8d74-47dc-8f91-66c4dec6a89d)

こうなります![image](https://github.com/user-attachments/assets/7355bea4-beb7-47fe-9129-03f89265fcaf)


## はじめに
皆様お疲れ様です。KMUNCの開催お疲れさまでした。[コソボ会議](https://kmunc.org/conferences/kosovo/)秘書官としてフロント業務を行うなか、funDRの設問を編集する工程を自動化できないかと考え、GASによってある程度自動化することができました。

文系領域で大学生をやっている関係上、有識者の方からするとお見苦しい部分もあると思いますが、生暖かい目で見守っていただけると助かります。

## 要件
-GoogleフォームでのfunDR回答を自動で人ごとに結合させたい

-GASに免疫がない層でも扱えるように簡潔な挙動に抑えたい

## フォームの回答のリンク先+スクリプト置き場
[こちら](https://docs.google.com/spreadsheets/d/1FambOXWB5kMmKNdFPbb6rzyMvRj_R92Bd8NfyMXpO4U/edit?gid=1887112765#gid=1887112765)です

## 使い方
0.googleフォームを準備する
- 最初の設問を「送る対象者」(プルダウンでの選択式を推奨)に設定
- 2問目で文言の内容を収集する設定

この二点が必須となります

1.[上記リンク](https://docs.google.com/spreadsheets/d/1FambOXWB5kMmKNdFPbb6rzyMvRj_R92Bd8NfyMXpO4U/edit?gid=1887112765#gid=1887112765)を開き、ファイル→「コピーを作成」をクリック

![](https://storage.googleapis.com/zenn-user-upload/c3268009f5dd-20240826.png)

Apps Scriptが本命です(この画面が出てればよい)
スプレッドシートのタイトルは好きに変更して大丈夫です。

![](https://storage.googleapis.com/zenn-user-upload/313eb5a2272b-20240826.png)

2.準備したgooleフォームの編集ページから、回答が確認できるセクションに移動
スプレッドシートにリンク→既存のスプレッドシートを選択し、先ほどコピーしたスプレッドシートを選ぶ。(最近使用したファイルからたどるのが簡単)

![](https://storage.googleapis.com/zenn-user-upload/9b363d3af621-20240826.png)

3.回答がスプレッドシートに反映されているかどうかを確認する

![](https://storage.googleapis.com/zenn-user-upload/261e98c9a262-20240826.png)

こんな感じになっていればOK。
注意：必ず「フォームの回答 1」となるようにしてください。※GASの関数の設定で、「フォームの回答 1」というタイトルのタブのデータが対象になっています。

4.実際に関数を動かしてみる
![](https://storage.googleapis.com/zenn-user-upload/a29009bd91c2-20240826.png)

関数実行用シートにある緑の図形が関数の実行ボタン。これをクリックすると「フォームの回答 1」のデータをもとにして関数がはしる。

※初回実行時には権限の承認が必要。
クリックすると↓の画面が出るのでOKを押す

![](https://storage.googleapis.com/zenn-user-upload/ee5f25fc5e36-20240826.png)


操作しているgoogleアカウントを選ぶ。
![](https://storage.googleapis.com/zenn-user-upload/3a74852418f3-20240826.png)

この画面が出るので、左下の詳細のリンクをクリック
![](https://storage.googleapis.com/zenn-user-upload/a0344b4c8a3a-20240826.png)

※いかにも危なそうな画面ですが、この単独の関数のみの許可になるのでそこまでの心配はしなくて大丈夫でしょう(たぶん)

クリックするとページが下に展開されるので(安全ではないページ)に移動というリンクが出るのでそれをクリック

![](https://storage.googleapis.com/zenn-user-upload/71626e0dd80f-20240826.png)

この画面が出るので、下にスクロールして許可をクリック

![](https://storage.googleapis.com/zenn-user-upload/abdc5f934eda-20240826.png)



![](https://storage.googleapis.com/zenn-user-upload/329571b6387a-20240826.png)

そうすると関数の実行ができ、「フォームの回答 1」タブにてB列ごとにC列の回答を結合した結果が「回答まとめ」タブにでます！



## 補足：二回目以降の実行について
フォームが集まりきってからなど、再度関数を実行する場合もあると思います。その場合は「回答まとめ」タブの内容が一度削除され、再度作成しなおすという仕様になるので、「回答まとめ」タブはあくまで機械的に結合した結果を参照するのみにとどめ、**同一タブ上でさらなる編集などを行わない**ように気を付けてください。

## スクリプトの中身
添付したGASのコードを直接確認することももちろん可能ですが、githubにもリポジトリを作成しましたのでご確認ください。
https://github.com/sudolifeagain/codes-for-mgi/blob/main/codes/funDR-editing.gs

## ちょっとした応用
GASスクリプト自体の編集ができる方は、GASの画面にて各種設定値をいじってカスタマイズできます。コメントアウトしてある部分でおおよそわかると思うのでいい感じに弄っちゃってください。
