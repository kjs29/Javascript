We have a html file

```html
<body>
<ul id="fruits">
<li>Apple 🍎</li>
<li>Grapes 🍇</li>
<li>Pear 🍐</li>
<li>Orange 🍊</li>
</ul>
<input type="button" onclick="getCount()" value="Count all items in the list">
  
</body>
```

Write js file so that it adds a paragraph that says the total count of the fruit list.

![image](https://github.com/kjs29/Javascript/assets/96529477/acfb7880-d58b-4b66-bcb9-77c7d031b120)


<details>


  <summary>answer</summary>

```js
function getCount() {
  let ul = document.getElementsByTagName('ul');
  let length = ul[0].children.length;
   
  let para = document.getElementById('countResult');
  
  if (para === null) {
    
    // get a new paragraph element
    let para = document.createElement('p');

    // add an id to para
    para.id = 'countResult';
    
    // add a text to the element
    let text = document.createTextNode(length);
    
    // add text to para
    para.appendChild(text);
    
    // add para to body as a child
    document.body.appendChild(para);
  }
  
  // if it exists, it updates
  para.text = length;
  
}
```

</details>

source : [link](https://medium.com/nerd-for-tech/up-your-dom-manipulation-game-through-these-exercises-part-01-103864ac8b0b)
