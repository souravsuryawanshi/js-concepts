const throttle = (cb, timer) => {
    let shouldWait = false;
    
    return (...args) => {
        if(shouldWait) return;
        cb(...args);
        shouldWait = true;
        setTimeout(()=>{
            shouldWait = false;
        },timer)
    }
}