I don't understand this function.

```js
/*

`feedPet` should take in a pet name and return a
function that, when invoked with a food, will return the pet's name and a list
of foods that you have fed that pet.

*/

function feedPet(name) {
  const foods = {
    food: [],
    name: name,
  };
  return (food) => {
    foods.food.push(food);
    return "Fed " + name + " " + foods.food.join(", ") + ".";
  }
}

const feedHydra = feedPet('Hydra');

console.log(feedHydra('bones')); // Fed Hyrda bones.
console.log(feedHydra('Hercules')); // Fed Hyrda bones, Hercules.

const feedHippogriff = feedPet('Hippogriff');

console.log(feedHippogriff('worms')); // Fed Hyrda worms.
console.log(feedHippogriff('crickets')); // Fed Hyrda worms, crickets.
console.log(feedHippogriff('chicken')); // Fed Hyrda worms, crickets, chicken.

```
