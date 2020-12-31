//收到地區，回傳對應的陣列
//格式 ( 地區,位置 )
var MetropolitanAreaSubtag = ["下水道", "停車場", "遊樂園", "公園"];
var RuralAreaSubtag = ["農場", "遺跡", "露營地", "森林"];
var AreaName = ["都市", "鄉村"];

class AreaList {
  areaAndLocation(Area) {
    switch (Area) {
      case "都市":
        return MetropolitanAreaSubtag;

      case "鄉村":
        return RuralAreaSubtag;

      case "隨機":
        // 丟全部的地區(Area)陣列 (沒有位置(Location)，要位置得確定地區(隨機抽選)後問第二次)
        console.log(AreaName);

        return AreaName;

      default:
        break;
    }
  }
}
