function SimpleObject(){
  this.collection = [];
  this.each = function(func){
      this.collection.forEach(func)
    }
  }


myObj = new SimpleObject();
myObj.collection = [1,"foo",3];
myObj.each( function( el, index ) {
  console.log( "Item " + index + " is " + el);
})

SimpleObject.each = (collec, func) => {
  collec.forEach(func);
}

let collection = ['foo', 'bar', 'fiz', 'baz'];

SimpleObject.each(collection, function(el, index) {
  console.log( "Item " + index + " is " + el);
});