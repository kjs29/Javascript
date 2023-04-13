function printObject(obj) {
    for (const key in obj) {
        console.log(`${key} - ${obj[key]}`)
    }
}

let bootcamp = {
name: "App Academy",
color: "Red",
population: 120
};

printObject(bootcamp); // prints
// name - App Academy
// color - Red
// population - 120
