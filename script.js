var areaChoose = null;
var MetropolitanAreaSubtag = ["下水道", "停車場", "遊樂園", "公園"];
var RuralAreaSubtag = ["農場", "遺跡", "露營地", "森林"];
//初始化函數
function Init() {
  // 區域按鈕
  document
    .getElementById("btn_RandomArea")
    .addEventListener("click", RandomArea_Clicked);
  document
    .getElementById("btn_MetropolitanArea")
    .addEventListener("click", MetropolitanArea_Clicked);
  document
    .getElementById("btn_RuralArea")
    .addEventListener("click", RuralArea_Clicked);
  document
    .getElementById("btn_Confirm")
    .addEventListener("click", Confirm_Clicked);
}

// 按按鈕
function RandomArea_Clicked() {
  var left = document.getElementById("left");
  left.textContent = "隨機";
  areaChoose = "隨機";
}

function MetropolitanArea_Clicked() {
  var left = document.getElementById("left");
  left.textContent = "都市";
  areaChoose = "都市";
}

function RuralArea_Clicked() {
  var left = document.getElementById("left");
  left.textContent = "鄉村";
  areaChoose = "鄉村";
}

function Confirm_Clicked() {
  var left = document.getElementById("left");
  left.textContent = "";
  switch (areaChoose) {
    case "隨機":
      alert("隨機");
      break;
    case "都市":
      var result = Math.floor(Math.random() * MetropolitanAreaSubtag.length);
      left.textContent = "都市－" + MetropolitanAreaSubtag[result];
      break;
    case "鄉村":
      var result = Math.floor(Math.random() * RuralAreaSubtag.length);
      left.textContent = "鄉村－" + RuralAreaSubtag[result];
      break;
    case null:
      alert("null");
      break;
    default:
      break;
  }
}

Init();
