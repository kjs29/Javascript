Create a function `age_based_discount` that takes `age`, and `originalPrice`.

If age is less than 3, it should give 20% discount,

if age is between 3 and 10, it should give 30% discount,

and if age is more than 10, it should give 50% discount.

Return the final price based on the age.

### Use only ternary operator and don't use `if`.

<details>

  <summary>answer</summary>

```js
function age_based_discount(age, originalPrice) {
    let discount = (age < 3 ? 0.2 : age > 10 ? 0.5 : 0.3);
    return originalPrice * (1 - discount);
}
```

</details>
