Promise.runAll = function(promises) {
    let result = new Array(promises.length); 
    let totalPromisesResolved = 0;
  
    return new Promise((resolve, reject) => {
      promises.forEach((promise, index) => {
        promise
          .then((val) => {
            result[index] = val; //store the result of promise at the same index
            totalPromisesResolved++;
            if (totalPromisesResolved == promises.length)
              resolve(result); //all promises are resolved, call resolve
          }).catch((err) => {
            reject(err); //if any promise rejects, call the reject function
          });
      });
    });
  };