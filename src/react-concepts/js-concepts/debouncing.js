const debouncing = (cb, timer = 3000) => {
    let timeOut = null;
    return (...args) => {
        clearTimeout(timeOut);
        timeOut = setTimeout(()=>{
            cb(...args);
        }, timer)
    }

}

export default function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    }
  }