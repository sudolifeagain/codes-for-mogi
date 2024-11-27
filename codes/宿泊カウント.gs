// スプレッドシートのIDとセルの位置を設定
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID';
const SHEET_NAME = 'Sheet1';
const CELL_TO_MONITOR = 'A1';

// Discordのwebhook URLを設定
const DISCORD_WEBHOOK_URL = 'YOUR_DISCORD_WEBHOOK_URL';

// 前回の値を保存するためのプロパティ
const LAST_VALUE_PROPERTY = 'lastValue';

function checkAndNotify() {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
  const currentValue = sheet.getRange(CELL_TO_MONITOR).getValue();
  
  const properties = PropertiesService.getScriptProperties();
  const lastValue = Number(properties.getProperty(LAST_VALUE_PROPERTY) || 0);
  
  if (currentValue > lastValue) {
    sendDiscordNotification(`値が増加しました: ${lastValue} → ${currentValue}`);
    properties.setProperty(LAST_VALUE_PROPERTY, currentValue.toString());
  }
}

function sendDiscordNotification(message) {
  const payload = {
    content: message
  };
  
  const options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload)
  };
  
  UrlFetchApp.fetch(DISCORD_WEBHOOK_URL, options);
}

// トリガーを設定する関数（30分ごとに変更）
function setTrigger() {
  ScriptApp.newTrigger('checkAndNotify')
    .timeBased()
    .everyMinutes(30)
    .create();
}
