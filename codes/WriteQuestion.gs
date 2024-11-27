function onFormSubmit(e) {
  var form = FormApp.openById('FORMID-here');
  var responses = form.getResponses();
  var stayingCount = 0;

  Logger.log("フォーム送信イベントをトリガーしました。");

  // 宿泊での参加の回答数をカウント
  for (var i = 0; i < responses.length; i++) {
    var response = responses[i];
    var itemResponses = response.getItemResponses();
    for (var j = 0; j < itemResponses.length; j++) {
      var itemResponse = itemResponses[j];
      if (itemResponse.getItem().getTitle() == 'TITLENAME-here') {
        if (itemResponse.getResponse() == 'OPTIONNAME-here') {
          stayingCount++;
        }
      }
    }
  }

  Logger.log("宿泊希望者数: " + stayingCount);

  // 宿泊での参加がX人に達した場合、選択肢を更新
  if (stayingCount >= X) {
    var items = form.getItems();
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (item.getTitle() == 'TITLENAME-here' && item.getType() == FormApp.ItemType.MULTIPLE_CHOICE) {
        var multipleChoiceItem = item.asMultipleChoiceItem();
        var choices = multipleChoiceItem.getChoices();
        var newChoices = choices.filter(function(choice) {
          return choice.getValue() != 'OPTIONNAME-here';
        });

        // 選択肢を更新
        multipleChoiceItem.setChoices(newChoices);

        // 説明文を追加（既に追加されていない場合のみ）
        var currentHelp = multipleChoiceItem.getHelpText();
        var noticeText = "事務局手配のホテルは定員に達したため募集を締め切りました。";
        if (currentHelp.indexOf(noticeText) === -1) {
          var newHelp = currentHelp + "\n\n" + noticeText;
          multipleChoiceItem.setHelpText(newHelp);
          Logger.log("説明文を追加しました。");

          // Discord webhookに通知を送信（説明文が追加されたときのみ）
          sendDiscordNotification("事務局手配の宿泊オプションが定員に達したため、フォームから選択肢を削除しました。");
        } else {
          Logger.log("説明文は既に追加されています。Discord通知は送信されません。");
        }

        Logger.log("選択肢を更新しました。");
      }
    }
  } else {
    Logger.log("選択肢の更新条件を満たしていません。");
  }
}
