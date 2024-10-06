Function.prototype.mycall=function(obj={},...args){
    let fn=this 
    if(typeof fn !== "function"){
      throw new Error('Invalid function provided for binding.');
    }
    let randomProp = Math.random();
    while( obj[randomProp] !== undefined ){ 
        randomProp = Math.random();
    }
    obj[randomProp] = this; 
    let result = obj[randomProp](...args); 
    delete obj[randomProp]; 
    return result;
}