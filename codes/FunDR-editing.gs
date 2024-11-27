function generateResponses() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  
  // データが入っているシートの名前を指定（実際のシート名に置き換えてください）
  var dataSheetName = 'フォームの回答 1'; // データが入っているシート名に置き換えてください
  var sheet = spreadsheet.getSheetByName(dataSheetName);
  
  // シートが存在するか確認
  if (!sheet) {
    return;
  }
  
  // データ範囲の取得
  var dataRange = sheet.getDataRange();
  var data = dataRange.getValues();
  
  // ヘッダー行を取得
  var headers = data.shift();
  
  // 既存の「回答まとめ」シートを探す
  var outputSheet = spreadsheet.getSheetByName('回答まとめ');
  
  // 「回答まとめ」シートが存在する場合は削除し、新規作成
  if (outputSheet) {
    spreadsheet.deleteSheet(outputSheet);
  }
  outputSheet = spreadsheet.insertSheet('回答まとめ');

  // 対象者ごとにエピソードを集める
  var responses = {};
  data.forEach(function(row) {
    var target = row[1]; // B列：対象者
    var episode = row[2]; // C列：エピソード

    if (target && episode) { // 対象者とエピソードが空でないことを確認
      if (!responses[target]) {
        responses[target] = [];
      }
      responses[target].push(episode);
    }
  });

  var outputRow = 1;

  // 各対象者の回答をまとめて出力（A列に対象者、B列に回答）
  for (var target in responses) {
    if (responses.hasOwnProperty(target) && target) { // 対象者が空でないことを確認
      outputSheet.getRange(outputRow, 1).setValue(target + "への回答："); // A列に出力
      var responseText = responses[target].join(" ");
      outputSheet.getRange(outputRow, 2).setValue(responseText); // B列に出力
      
      // B列の幅を1050ピクセルに設定
      outputSheet.setColumnWidth(2, 1050);
      
      // B列の文字を折り返し表示に設定
      outputSheet.getRange(1, 2, outputSheet.getMaxRows(), 1).setWrap(true);
      
      outputRow += 2; // 空行を挿入
    }
  }
}
