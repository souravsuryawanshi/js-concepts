Array.prototype.ourReduce = function(cb, initialValue = 0){
     let result  = initialValue;
     for(let i = 0; i < this.length; i++){
        result = cb(result, this[i], i);
     }
     return result;
}