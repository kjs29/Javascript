We have objects,

```js
personal = {"name":"J","address": "somewhere over the rainbow"};
personal2 = {"name":"H","address": "heeee"};
personal3 = {"name":"R","address":"earth"};
```

We want to change the names of the `personal2` to `name2`, `address2`. And for the `personal3`, `name3`, `address3`


<details>

  <summary>answer</summary>

```js
let personal = {"name":"J","address": "somewhere over the rainbow",}
let personal2 = {"name":"H","address": "heeee"}
let personal3 = {"name":"R","address":"earth"}

let container = [personal, personal2, personal3];

for (let i=1;i<container.length;i++) {
    let each = container[i];
    each[`name${i+1}`] = each.name;
    each[`address${i+1}`] = each.address;
    delete each.name;
    delete each.address;
}

console.log(personal);      //{ name: 'J', address: 'somewhere over the rainbow' }
console.log(personal2);     //{ name2: 'H', address2: 'heeee' }
console.log(personal3);     //{ name3: 'R', address3: 'earth' }
```

</details>
