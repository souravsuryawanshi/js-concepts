Array.prototype.myMap = function (cb){
    let resultantArr = [];
    for(let i = 0; i < this.length; i++){
       resultantArr.push(cb(this[i]));
    }
    return resultantArr;
}