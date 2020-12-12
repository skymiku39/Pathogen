//初始化函數
function Init() {
  document
    .getElementById("btn_MetropolitanArea")
    .addEventListener("click", MetropolitanArea_Clicked);
}

// 按按鈕
function MetropolitanArea_Clicked() {
  var left = document.getElementById("left");
  left.textContent = "131212";
  // 跳出視窗
  // alert("都市");
}

Init();
