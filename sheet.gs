//  1. 執行 setup 去取得目前的 sheet id
//
//  2. 發布 > 部屬為網路應用程式
//    - 設定新的版本(每次修改都要增加版本號)
//    - 設定權限，選擇 我 執行，存取任何人，甚至匿名使用者
//
//  3. 複製連結到 surveycake webhook 設定
//

var SURVEYCAKE_IV = '5172402ab9756358';
var SURVEYCAKE_KEY = '9f3930e1aa8f19cd';

function doPost(e){
  var requestSurvey = {
    svid: e.parameter.svid,
    hash: e.parameter.hash,
    sv_iv: SURVEYCAKE_IV,
    sv_key: SURVEYCAKE_KEY
  }

  var options = {
    'method' : 'post',
    'contentType': 'application/json',
    'payload' : JSON.stringify(requestSurvey)
  };
  
  var response = UrlFetchApp.fetch('http://104.248.153.110', options);

  var result = JSON.parse(response.getContentText());
  
  var data = [result.submitTime];
  
  result.result.forEach(function (res) {
    data.push(res.answer.join(','));
  });
  
  data.push(response.getContentText())

  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.appendRow(data);
}
 
function setup() {
  PropertiesService.getScriptProperties().setProperty('active', SpreadsheetApp.getActiveSpreadsheet().getId());
}