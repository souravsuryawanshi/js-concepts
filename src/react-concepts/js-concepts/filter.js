Array.prototype.myFilter = function(cb){
    let result = [];
    for(let i = 0; i < this.length; i++){
        if(cb(this[i])){
            result.push(this[i]);
        }
    }
    return result;
}