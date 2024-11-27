function visualizeSharing() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName('共有状況');
  
  // 「共有状況」シートが存在しない場合は新規作成
  if (!sheet) {
    sheet = spreadsheet.insertSheet('共有状況');
  }
  
  var file = DriveApp.getFileById(spreadsheet.getId());
  
  // 新しいデータを収集
  var newData = collectData(spreadsheet, file);
  
  // 直前のデータを取得
  var previousData = getPreviousData(sheet);
  
  // データの差分を確認
  var hasDifference = checkDifference(newData, previousData);
  
  // 新しいデータのための空間を作成
  sheet.insertRowsBefore(1, hasDifference ? 20 : 3);  // 差分がある場合は20行、ない場合は3行
  
  // タイムスタンプを追加
  sheet.getRange('A1').setValue('更新日時:');
  sheet.getRange('B1').setValue(new Date()).setNumberFormat('yyyy/MM/dd HH:mm:ss');
  
  if (hasDifference) {
    // 差分がある場合、新しいデータを記録
    recordNewData(sheet, newData);
  } else {
    // 差分がない場合、「差分なし」と記録
    sheet.getRange('A3').setValue('差分なし');
  }
  
  // 使用されていない行を削除
  var lastRow = sheet.getLastRow();
  if (lastRow < (hasDifference ? 20 : 3)) {
    sheet.deleteRows(lastRow + 1, (hasDifference ? 20 : 3) - lastRow);
  }
  
  // 区切り線を追加
  sheet.getRange(lastRow + 1, 1, 1, 2).setBorder(false, false, true, false, false, false);
  
  // 列の幅を自動調整
  sheet.autoResizeColumns(1, 2);
}

function collectData(spreadsheet, file) {
  var activeSheet = spreadsheet.getActiveSheet();
  var protections = activeSheet.getProtections(SpreadsheetApp.ProtectionType.SHEET);
  var protection = protections.length > 0 ? protections[0] : null;
  
  var data = {
    title: spreadsheet.getName(),
    url: spreadsheet.getUrl(), // スプレッドシートのURLを取得
    editors: file.getEditors().map(editor => editor.getEmail()),
    viewers: file.getViewers().map(viewer => viewer.getEmail()),
    accessType: file.getSharingAccess().toString(),
    settings: {
      download: protection ? !protection.isProtected() : true,
      print: protection ? !protection.isProtected() : true,
      copy: protection ? !protection.isProtected() : true
    }
  };
  return data;
}

function getPreviousData(sheet) {
  var lastRow = sheet.getLastRow();
  if (lastRow <= 1) return null;  // データがない場合

  var range = sheet.getRange(3, 1, lastRow - 2, 2);
  var values = range.getValues();
  
  var data = {
    title: '',
    editors: [],
    viewers: [],
    accessType: '',
    settings: {
      download: true,
      print: true,
      copy: true
    }
  };
  
  for (var i = 0; i < values.length; i++) {
    if (values[i][0] === 'スプレッドシートのタイトル:') {
      data.title = values[i][1];
    } else if (values[i][0] === 'アクセス権限を持つユーザー:') {
      i++;
      while (i < values.length && values[i][1] !== '') {
        if (values[i][1] === '編集者') {
          data.editors.push(values[i][0]);
        } else if (values[i][1] === '閲覧者') {
          data.viewers.push(values[i][0]);
        }
        i++;
      }
    } else if (values[i][0] === '一般的なアクセスの設定:') {
      data.accessType = values[i][1];
    } else if (values[i][0].startsWith('閲覧者と閲覧者（コメント可）の権限設定:')) {
      data.settings.download = values[i][0].includes('ダウンロード: 許可');
      data.settings.print = values[i][0].includes('印刷: 許可');
      data.settings.copy = values[i][0].includes('コピー: 許可');
      break;  // 権限設定を読み取った後はループを抜ける
    }
  }
  
  return data;
}

function checkDifference(newData, previousData) {
  if (!previousData) return true;  // 前回のデータがない場合は差分ありとする
  
  // タイトルの比較
  if (newData.title !== previousData.title) return true;
  
  // アクセス権限の比較
  if (newData.accessType !== previousData.accessType) return true;
  
  // 編集者の比較
  if (!arraysEqual(newData.editors.sort(), previousData.editors.sort())) return true;
  
  // 閲覧者の比較
  if (!arraysEqual(newData.viewers.sort(), previousData.viewers.sort())) return true;
  
  // 設定の比較
  if (newData.settings.download !== previousData.settings.download ||
      newData.settings.print !== previousData.settings.print ||
      newData.settings.copy !== previousData.settings.copy) return true;
  
  return false;
}

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

function recordNewData(sheet, data) {
  sheet.getRange('A3').setValue('スプレッドシートのタイトル:');
  sheet.getRange('B3').setValue(data.title);
  
  sheet.getRange('A4').setValue('スプレッドシートのURL:');
  sheet.getRange('B4').setValue(data.url);
  
  sheet.getRange('A6').setValue('アクセス権限を持つユーザー:');
  var row = 7;
  
  data.editors.forEach(function(editor) {
    sheet.getRange(row, 1).setValue(editor);
    sheet.getRange(row, 2).setValue('編集者');
    row++;
  });
  
  data.viewers.forEach(function(viewer) {
    sheet.getRange(row, 1).setValue(viewer);
    sheet.getRange(row, 2).setValue('閲覧者');
    row++;
  });
  
  sheet.getRange('A' + (row + 1)).setValue('一般的なアクセスの設定:');
  sheet.getRange('B' + (row + 1)).setValue(data.accessType);
  
  var restrictionInfo = '閲覧者と閲覧者（コメント可）の権限設定:';
  restrictionInfo += '\nダウンロード: ' + (data.settings.download ? '許可' : '禁止');
  restrictionInfo += '\n印刷: ' + (data.settings.print ? '許可' : '禁止');
  restrictionInfo += '\nコピー: ' + (data.settings.copy ? '許可' : '禁止');
  
  sheet.getRange('A' + (row + 3)).setValue(restrictionInfo);
}
