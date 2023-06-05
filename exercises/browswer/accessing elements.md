We have html file here


```html
<html>
<body>
  <div>Users:</div>
  <ul>
    <li>John</li>
    <li>Pete</li>
  </ul>
</body>
<script>

</script>
</html>

```

In the script tag, 

write codes to access `div`, `ul`, `li` with `Pete`.

Write `console.log()` to print them out.

<details>

  <summary>answer</summary>

```js
// access div
let first = document.body.firstElementChild;
console.log(first);

// access ul
let second = first.nextElementSibling;
console.log(second);

// li with Pete
console.log(second.children[1])
```
</details>
