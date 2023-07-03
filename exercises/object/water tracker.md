Create a function `adequateWaterTracker`. 

`adequateWaterTracker` should return `true` if ALL the the weeks in the calendar array having more days in the week

that you drank water than you didn't.

For example, in this week, [0, 0, 3, 1, 0, 4, 0], each day represents how many cups of water you drank that day. 

In this example, there were only 3 days where you drank at least one cup of water.

A calendar is represented by multiple weeks, 

`[[0, 0, 3, 1, 0, 4, 0], [1, 2, 1, 2, 1, 3, 1]]`

If you drank water for at least 4 days of water for every week in the calendar,

then return `true`. Otherwise, return `false`.

```js
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
```


<details>

  <summary>answer
  
  tc : O(n*m)
  sc : O(1)
  </summary>

```js
function adequateWaterTracker(arr) {
    
    for (eachWeek of arr) {
        let standardWaterDay = 4;
        eachWeek.forEach(eachDay => {
            if (eachDay !== 0) {
                standardWaterDay--;
            }
        });
        
        if (standardWaterDay > 0) {
            return false;
        }
    }
    return true;
}

```

</details>


<details>

  <summary>another answer (7/2)
  
  tc : O(n*m)
  sc : O(n)
  </summary>

```js
function adequateWaterTracker(arr) {
    let waterMap = {};
    arr.forEach((eachWeek, i) => {
        waterMap[i] = 0
        eachWeek.forEach(eachDay => {
            if (eachDay > 0) {
                waterMap[i] += 1;
            }
        });
    });
    for (eachWeek in waterMap) {
        if (waterMap[eachWeek] < 4) {
            return false;
        }
    }
    return true;
}
```

</details>


<details>

  <summary>another answer (7/2)
  
  tc : O(n*m)
  sc : O(n)
  </summary>

```js
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
```

</details>
