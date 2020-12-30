class LevelManager {
  constructor() {
    this.areaList = new AreaList();
    this.random = new Random();
  }
  randomArea(Area) {
    //收到地區，回傳地區+位置
    //收到隨機或其他，回傳隨機地區+位置
    //丟全部的地區(Area)陣列 (沒有位置(Location)，要位置得確定地區(隨機抽選)後問第二次)

    switch (Area) {
      case "都市":
        var result = this.areaList.areaAndLocation(Area);
        var randomResult = this.random.randomArray(result);
        return Area + "_" + randomResult;

      case "鄉村":
        var result = this.areaList.areaAndLocation(Area);
        var randomResult = this.random.randomArray(result);
        return Area + "_" + randomResult;

      case "隨機":
        var areaResult = this.areaList.areaAndLocation(Area);
        var AreaName = this.random.randomArray(areaResult);
        var result = this.areaList.areaAndLocation(AreaName);
        var LocationName = this.random.randomArray(result);
        return AreaName + "_" + LocationName;

      default:
        break;
    }
  }
}
