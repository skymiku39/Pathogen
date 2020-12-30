//收到陣列，隨機抽選一個陣列元素，回傳
//格式 ( 陣列[隨機數] )

class Random {
  randomArray(Array) {
    console.log("randomArray_Input " + Array);
    var result = Math.floor(Math.random() * Array.length);
    console.log("randomArray_result " + result);

    return Array[result];
  }
}
