function sendDiscordNotification(message) {
  var webhookUrl = "WEBHOOKURL-here";
  var threadId = "THREADID-here"; // スレッドIDを指定してください

  var payload = {
    "content": message
  };

  var options = {
    "method": "post",
    "contentType": "application/json",
    "payload": JSON.stringify(payload),
    "muteHttpExceptions": true
  };

    try {
    // スレッドIDをURLに追加
    var fullUrl = webhookUrl + "?thread_id=" + threadId;
    var response = UrlFetchApp.fetch(fullUrl, options);
    
    // レスポンスコードを数値として取得
    var responseCode = response.getResponseCode();
    
    if (responseCode === 200 || responseCode === 204) {
      Logger.log("Discord通知を指定されたスレッドに送信しました。");
    } else {
      Logger.log("Discord通知の送信に失敗しました。レスポンスコード: " + responseCode);
      Logger.log("レスポンス内容: " + response.getContentText());
    }
  } catch(error) {
    Logger.log("Discord通知の送信に失敗しました: " + error);
    Logger.log("エラーの詳細: " + error.toString());
  }
}
