const Item = require('../item.js');

class Legendary extends Item {
constructor(name){
  super(name,Infinity,80)
}

   updateQuality(){
      return this
   }

}

module.exports = Legendary

// let legend1 = new Legendary("Sulfuras");
// console.log(legend1);