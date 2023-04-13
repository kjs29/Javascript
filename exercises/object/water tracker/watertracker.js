function adequateWaterTracker(calendar) {
    let checkWater = {};
    
    for (let i = 0; i < calendar.length; i++) {
        const week = calendar[i];
        let water = 0;
        let noWater = 0;
        week.forEach(n=>{
            if (n===0){
            noWater++;
            } else {
            water++;
            }
            if (water >= 4) {
            checkWater[i] = true;
            } else {
            checkWater[i] = false;
            }
        })
    }
    let values = Object.values(checkWater);
    
    return !values.includes(false);
}
  
const calendar1 = [
    [0, 0, 3, 1, 0, 4, 0],
    [1, 2, 1, 2, 1, 3, 1],
];

console.log(adequateWaterTracker(calendar1)); // false

const calendar2 = [
    [1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 1],
];

console.log(adequateWaterTracker(calendar2)); // false

const calendar3 = [
    [1, 1, 1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0],
];

console.log(adequateWaterTracker(calendar3)); // true
