# 07/02 (x)


```js
let myProfile = {
    'occupation': 'SWE',
    'age' : 30,
    'languages' : { 
        'Python'     : { 'FrameWork' : 'Django' },
        'JavaScript' : { 'FrameWork' : 'React' }
    }
}
```

Using this information, create a function `profile` to print like this below.

`profile` takes an object as argument.

```js

profile(myProfile);

// 0 occupation SWE
// 1 age 30
// 2 languages { Python: { FrameWork: 'Django' }, JavaScript: { FrameWork: 'React' } }
```


<details>

  <summary>answer</summary>

```js
let myProfile = {
    'occupation': 'SWE',
    'age' : 30,
    'languages' : { 
        'Python'     : { 'FrameWork' : 'Django' },
        'JavaScript' : { 'FrameWork' : 'React' }
    }
}

function profile(obj) {
    let entries = Object.entries(obj);

    for (let i=0;i<entries.length;i++) {
        let [key, value] = entries[i];
        console.log(i, key, value)
    }
}

profile(myProfile);
```

</details>
