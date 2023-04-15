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

profile(myProfile)
