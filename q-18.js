// a
if (true) {
  let x = 10;
  var y = 20;
}
console.log(y);
console.log(x);
// var y → globally scoped
// So y is accessible outside the block, hence prints 20.
// let x → Block-scoped
// x exists only inside the if-block, so accessing it outside gives:ReferenceError: x is not defined

// b
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};
console.log(profile?.user?.details?.email);
console.log(profile?.user?.details?.phone);


// c
const product = {
  id: 1,
  info: {
    name: "Laptop"
  }
};
console.log(product?.info?.price?.value);

