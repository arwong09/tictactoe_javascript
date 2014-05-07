// var readline = require('readline');
// var reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

var clock = function(){ function Clock(){
    this.startTime = new Date();
    this.hh = parseInt(this.startTime.getHours());
    this.mm = parseInt(this.startTime.getMinutes());
    this.ss = parseInt(this.startTime.getSeconds());
    this.seconds = this.hh * 3600 + this.mm * 60 + this.ss;
  }

  Clock.prototype.run = function(){
    var that = this
    setInterval(function() {that.tick()}, 500);
  }

  Clock.prototype.tick = function(){
    this.seconds += 5;
    var hh = Math.floor(( this.seconds / 3600 )) % 24;
    var mm = Math.floor((( this.seconds % 3600 ) / 60 )) % 60;
    var ss = this.seconds % 60;
    if(ss <= 9) { ss = "0" + ss;}
    if(hh <= 9) { hh = "0" + hh;}
    if(mm <= 9) { mm = "0" + mm;}
    console.log(hh + ":" + mm + ":" + ss);
  }

  var clock = new Clock();
  // clock.run();
  //
}

var addNumbers = function(s, n, c) {
  function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft === 0) {
      completionCallback(sum);
      reader.close();
    } else {
        reader.question("Enter a number:", function (numString) {
        var num = parseInt(numString);
        numsLeft -= 1;
        sum += num;
        console.log("The current total is: " + sum);
        addNumbers(sum, numsLeft, completionCallback);
      });
    }
  }

  addNumbers(s, n, c);
}

// addNumbers(0, 3, function (sum) {
//   console.log("Total Sum: " + sum);
// });

/*********************************************************/
var crazyBubbleSort = function(arr, func) {
  function crazyBubbleSort(arr, sortCompletionCallback){
    function sortPassCallback(madeAnySwaps){
      if(madeAnySwaps){
        performSortPass(arr, 0, false, sortPassCallback);
      }else{
        sortCompletionCallback(arr);
        reader.close();
      }
    }

    sortPassCallback(true);
  }

  function askLessThan(el1, el2, callback){
    reader.question(el1 + " less than " + el2 + "?", function(answer){
      if (answer === "yes"){
        callback(true);
      } else if (answer === "no") {
        callback(false);
      }
    });
  }

  function performSortPass(arr, i, madeAnySwaps, callback){
    if ( i < arr.length - 1){

      askLessThan(arr[i], arr[i + 1], function(no_swap){
        if(!no_swap){
          var tmp = arr[i + 1];
          arr[i + 1] = arr[i];
          arr[i] = tmp;
          madeAnySwaps = true;
        }
        performSortPass(arr, i + 1, madeAnySwaps, callback);
      });

    } else {
      callback(madeAnySwaps);
    }
    console.log("Function exits");
  }
}
// crazyBubbleSort([3, 2, 1], function (arr) { console.log(arr) });
 //tick.bind(this)
Function.prototype.myBind = function(context) {
  this.apply(context);
}

// Number.prototype.timesTwo = function(){
//   var num = this;
//   console.log(num * 2);
// }
//
// var x = 2;
// x.timesTwo();
// x.timesTwo.myBind(2);
//
// function Person(name){
//   this.name = name;
// }
//
// y = new Person("random");
//
// function printName() { console.log(this.name) ;}
//
// printName.myBind(y);
