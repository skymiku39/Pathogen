var areaChoose = null;

class Presenter {
  constructor() {
    this.view = new View(document, this);
    this.levelManager = new LevelManager();
  }

  //選單按鈕被按下
  RandomArea_Clicked() {
    areaChoose = "隨機";
    this.view.Lift_View(areaChoose);
  }
  MetropolitanArea_Clicked() {
    areaChoose = "都市";
    this.view.Lift_View(areaChoose);
  }
  RuralArea_Clicked() {
    areaChoose = "鄉村";
    this.view.Lift_View(areaChoose);
  }
  //確定按鈕被按下
  Confirm_Clicked() {
    // var left = document.getElementById("left");
    var text;
    // left.textContent = "";

    switch (areaChoose) {
      case "隨機":
        text = this.levelManager.randomArea(areaChoose);
        this.view.Lift_View(text);
        // var resultArea = Math.floor(Math.random() * AreaName.length);
        // left.textContent = randomArea(AreaName[resultArea]);
        break;
      case "都市":
        text = this.levelManager.randomArea(areaChoose);
        this.view.Lift_View(text);
        break;
      case "鄉村":
        text = this.levelManager.randomArea(areaChoose);
        this.view.Lift_View(text);
        break;
      case null:
        alert("null");
        break;
      default:
        break;
    }
  }
}
