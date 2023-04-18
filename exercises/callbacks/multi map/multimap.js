let multiMap = function(value, number, cb) {
    for (let i=0;i<number;i++) {
        value = cb(value)
    }
    return value;
};
