const expensive = () => {
    console.log("Suppose I am callling API on button click everytime.");
}

const throttle = (limit) => {
    let flag = true;
    return function() {
        let context = this;
        args = arguments;
        if (flag) {
            expensive.apply(context, args);
            flag = false;
        }
        setTimeout(()=> {
            flag = true;
        }, limit);
    }
}

const betterThrottled =  throttle(100000);