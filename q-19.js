// 1.(a)
console.log(`5 + 7 = ${5 + 7}`);

// 1.(b)
const multiLine = `
This is line 1
This is line 2
This is line 3
`;

console.log(multiLine);

// 1.(c)
const firstName = "John";
const lastName = "Doe";
console.log(`Full Name: ${firstName} ${lastName}`);

// 2.(a)
const square = (n) => n * n;


// 2.(b)
const obj = {
  value: 50,
  test: () => console.log(this.value)
};
obj.test();
// They inherit this from the surrounding scope, which here is the global scope.
// In the global scope, this.value is not defined, so it prints undefined


// 2.(c)
const object = {
  value: 50,
  test() {
    console.log(this.value);
  }
};
object.test();


// 3.(a)
const product = { name: "Pen", price: 10 };
const newProduct={...product};
console.log(newProduct);

// 3.(b)
const a = { x: 1 };
const b = { y: 2 };
const c={...a,...b};
console.log(c);


// 3.(c)
const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(2, 18, 7, 10, 5)); 


// 4.(a)
const arr = [10, 20, 30];
const [x, y] = arr;
console.log(x);
console.log(y); 

// 4.(b)
const laptop = { brand: "Dell", ram: "8GB" };
const{brand}=laptop;

// 4.(c)
const info = {};
console.log(info?.details?.name);


// 5.(a)
for (var i = 0; i < 3; i++) {}
console.log(i); //output-3


// 5.(b)
for (let j = 0; j < 3; j++) {}
console.log(j);  //ReferenceError: j is not defined

// 5.(c)
// const prevents reassignment of the variable.



// 6.(a)
let speed = kmph > 60 ? "Fast" : "Normal";

// 6.(b)
let status1 = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";

// 6.(c)
let statuse2 = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";


// 7.(a)
const nums = [1, 2, 3];
const updated = [...nums, 4, 5];

// 7.(b)
const m = ["x", "y"];
const n = ["z"];

const combined = [...m, ...n];

// 7.(c)
function printNames(...names) {
  return names;
}
printNames("A", "B", "C"); 

// 8.(a)
const user = { id: 101, status: "active" };

const { id, status } = user;

// 8.(b)
const id1 = 101;
const role = "admin";

const user1 = { id1, role };

// 8.(c)
const name = "Shruti";
const age = 22;

const person = {
  name,
  age,
  greet() {
    return `Hello, ${name}!`;
  }
};


// 9.(a)
const today = `Today's date is: ${new Date().toDateString()}`;

// 9.(b)
const msg = `Hello ${name}, your score is ${score}/100`;

// 10.(a)
const add = (a, b) => a + b;

// 10.(b)
const isAdult = age => age >= 18;

// 10.(c)
const double = num => num * 2;


// 11.(a)
const arr1 = [1, 2, 3];
const clone = [...arr1];
console.log(clone);

// 11.(b)
const arr2 = [1, 2, 3];
const updatedArr = [100, ...arr2];
console.log(updatedArr);

// 11(c)
const obj1 = { id: 1, status: "active" };
const obj2 = { status: "inactive", role: "admin" };

const merged = { ...obj1, ...obj2 };
console.log(merged);

// 12.(a)
const city = user?.address?.city;

// 12.(b)
const jobTitle = user?.job?.title; 

// 12.(c)
const username = profile?.details?.name;








