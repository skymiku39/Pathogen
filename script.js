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
}

// 按按鈕
function RandomArea_Clicked() {
  var left = document.getElementById("left");
  left.textContent = "隨機";
  // 跳出視窗
  // alert("都市");
}

function MetropolitanArea_Clicked() {
  var left = document.getElementById("left");
  left.textContent = "都市";
  // 跳出視窗
  // alert("都市");
}

function RuralArea_Clicked() {
  var left = document.getElementById("left");
  left.textContent = "鄉村";
  // 跳出視窗
  // alert("都市");
}
Init();
