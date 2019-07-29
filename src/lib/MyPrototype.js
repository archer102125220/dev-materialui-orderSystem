/*

自定義的原形鏈，套用框架的情況下不可更動OBJ，否則會影響框架的運行

*/
String.prototype.LastSearch = function (reg) { //由左向右的正規表達式搜尋
    var i = 1;
    while (i < this.length - 1 && this.substring(this.length - i, this.length).search(reg) < 0) i++;
    return (this.substring(this.length - i, this.length).search(reg) == 0 ? this.length - i : -1);
}
String.prototype.CountSearch = function (reg) { //透過正規表達式去計算字串出現次數的搜尋
    var i = 0,
        count = 0,
        value = this;
    while (value.length > 0 && i < value.length) {
        var index = value.substring(i, value.length).search(reg);
        if (index > -1) {
            count++;
            value = value.substring(index, value.length);
        }
        i++;
    }
    return count;
}
Array.prototype.RemoveBykey = function (removeKey) {
    return this.filter((val, key) => key !== removeKey);
};
Array.prototype.RemoveByValue = function (removeValue) {
    return this.filter(val => val !== removeValue);
};
Array.prototype.ArrayComparison = function (searchArray) {
    if (this.length === 0 || searchArray.length === 0) {
        return this.length === searchArray.length;
    } else {
        return this.every(val =>
            searchArray.some(searchVal =>
                val === searchVal
            )
        );
    }
};
Math.RoundDecimal = function (value, amount) { //使 Math.round() 可依照 amount 的數值做進位
    var carry = 10;
    for (var i = 1; i < amount; i++) carry *= 10;
    value = Math.round(value * carry);
    value = value / carry;
    return value;
}
Math.FloorDecimal = function (value, amount) {//使 Math.floor() 可依照 amount 的數值做進位
    var carry = 10;
    for (var i = 1; i < amount; i++) carry *= 10;
    value = Math.floor(value * carry);
    value = value / carry;
    return value;
}
Math.CeilDecimal = function (value, amount) {//使 Math.ceil() 可依照 amount 的數值做進位
    var carry = 10;
    for (var i = 1; i < amount; i++) carry *= 10;
    value = Math.ceil(value * carry);
    value = value / carry;
    return value;
}
Object.FilterByValue = function (obj, search) {//Object的 Array.filter() ，由於寫在prototype會造成react執行錯誤，故需以 Object.filter(物件,比對值) 呼叫
    let retArr = [];
    for (var key in obj) {
        if (obj[key] === search) retArr.push(obj[key]);
    }
    // if (retArr.length === 0) console.log("not  defined");
    return retArr;
}
Object.FilterByName = function (obj, search) {//Object的 Array.filter() ，由於寫在prototype會造成react執行錯誤，故需以 Object.filter(物件,比對值) 呼叫
    let retArr = [];
    for (var key in obj) {
        if (obj[key] === search) retArr.push(key);
    }
    // if (retArr.length === 0) console.log("not defined");
    return retArr;
}