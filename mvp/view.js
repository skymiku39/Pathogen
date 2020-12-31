var areaChoose = null;
class View {
  //初始化函數
  constructor(document, presenter) {
    // 區域按鈕
    this.PST = presenter;
    this.DOM = document;
    let self = this;

    this.DOM.getElementById("btn_RandomArea").addEventListener(
      "click",
      toRandomArea_Clicked
    );
    this.DOM.getElementById("btn_MetropolitanArea").addEventListener(
      "click",
      toMetropolitanArea_Clicked
    );
    this.DOM.getElementById("btn_RuralArea").addEventListener(
      "click",
      toRuralArea_Clicked
    );
    this.DOM.getElementById("btn_Confirm").addEventListener(
      "click",
      toConfirm_Clicked
    );

    // Event Handler
    function toRandomArea_Clicked() {
      self.PST.RandomArea_Clicked();
    }
    function toMetropolitanArea_Clicked() {
      self.PST.MetropolitanArea_Clicked();
    }
    function toRuralArea_Clicked() {
      self.PST.RuralArea_Clicked();
    }
    function toConfirm_Clicked() {
      self.PST.Confirm_Clicked();
    }
  }

  //左邊視窗的顯示
  Lift_View(String) {
    var left = document.getElementById("left");
    left.textContent = String;
  }

  // // 按按鈕
  // RandomArea_Clicked() {}

  // MetropolitanArea_Clicked() {
  //   var left = document.getElementById("left");
  //   left.textContent = "都市";
  //   areaChoose = "都市";
  // }

  // RuralArea_Clicked() {
  //   var left = document.getElementById("left");
  //   left.textContent = "鄉村";
  //   areaChoose = "鄉村";
  // }

  // //隨機可視化
  // randomVisualize(Area, Result) {
  //   for (var sleepCount = 1; sleepCount < 700; sleepCount = sleepCount * 1.1) {
  //     //暫停
  //     // setTimeout(check, 3000);
  //     left.textContent = sleepCount;
  //   }
}
