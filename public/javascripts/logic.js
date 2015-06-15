module.exports = {
  priceArray : [[0, 350, 250], [350, 0, 545], [250, 545, 0]],

  removeNeg: function(number) {
    if (number < 0) {
      return 0;
    }
    return number;
  },
  
  checkTrip: function(x,y,z) {
    if (x == y) {
      return 0;
    }
    return z;
  },
  
  calcDisc: function(discCode){
    if (discCode == "10OFF") {
      return .9
    }
    else if (discCode == "20OFF") {
      return .8
    }
    else if (discCode == ""){
      return 1
    }
    return 3
  }
}