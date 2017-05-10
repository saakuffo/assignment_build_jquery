// Foo constructor
function Foo(){
  this.someProp = "Prop";
  this.someFunc = () => { return "Some Func" };
}

let foo = new Foo();
console.log(foo instanceof Object)
console.log(foo instanceof Foo)

// Bar anon constructor
function Bar(){
  this.someProp = "Prop";
  this.someFunc = () => { return "Some Func" };
  return this;
}

let bar = Bar.call({});
console.log(bar instanceof Object)
console.log(bar instanceof Bar)


function Baz() {
  if (!(this instanceof Baz)) return new Baz();
}

let baz = new Baz();
console.log(baz instanceof Object)

baz = Baz();
console.log(baz instanceof Baz)