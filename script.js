  //  console.log('external');
  //  function myFun1(a,b = 2){
  //    console.log(a + b);
  //  }

  //  var myFun2 = function(a, b){
  //    console.log(a + b);
  //  }

  //  myFun1(5);
  //  myFun2(1, 3);

  //  var a = 'a';
  //  var b = 123;
  //  var c = {
  //    key:'value'
  //  };
  //  function d(){

  //  }
  //  var e;
  //  var f = false;
  //  console.log(typeof a);
  //  console.log(typeof b);
  //  console.log(typeof c);
  //  console.log(typeof d);
  //  console.log(typeof e);
  //  console.log(typeof f);


// var a = NaN;
// var b = [1, 2, 3];
// var c = null;

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// var name = 'yychang';
// var msg = `hello ${name}, you are handsome.`;
// console.log(msg);


// var a = 1 + 2;
// var b = '1' + 2;
// var c = 1 + '2';
// var d = '1' + '2';
// console.log(a, b, c, d);

// var a = 1 - 2;
// var b = '1' - 2;
// var c = 1 - '2';
// var d = '1' - '2';

// console.log(a, b, c, d);

// var a = '1';
// var b = 2;
// console.log(parseInt(a) + b);
// console.log((+a) + b);

// var a = '1';
// var b = 2;
// console.log(parseInt(a) + b);
// console.log((+a) + b);

// console.log(1 != '1'); // 只會比較值
// console.log(1 !== '1'); //會比較型態

// var obj = {
//     a: 123, 
//     b: 456
// };
// for (let key in obj) {
//     console.log(obj[key]);
// }

// console.log(obj.a);
// console.log(obj.b);

// var arr = [1, 2, 5, 7, 6];
// for (let val of arr) {
//     console.log(val);
// }



// alert('hello world');

// var shouldUpdate = confirm('立即更新 Windows');
// console.log(shouldUpdate);

// var name = prompt('What is your name?');
// console.log(name)

// Counter.add();
// Counter.add();
// Counter.add();
// Counter.add();
// Counter.add();
// Counter.add();
// Counter.add();
// Counter.add();
// Counter.add(5); // （）內沒有填值的話，就會輸入 c

// var count = Counter.getCount();
// console.log(count);


// document.getElementById("myBtn").addEventListener("click", function(){
//     document.getElementById("demo").innerHTML = "Hello World";
// });


// $('document').ready(function(){
//   $('#myBtn').on('dblclick', function () {
//     console.log('button clicked');
//   });
//   $('#myInput').on('keyup', function () {
//       console.log('keyup');
//   });
//   $('#myInput').on('keydown', function () {
//       console.log('keydown');
//   });
//   $('#myInput').on('keypress', function () {
//       console.log('keypress');
//   });
// })
// $('document').ready(function(){
//   var content = $('#myDiv').html();
//   console.log(content);
// })
// $('document').ready(function(){
//   $('#myDiv').html('<a href="http://www.google.com.tw">google</a>')
// })


// $('document').ready(function(){
//     var content1 = $('#myDiv').html();
//     var content2 = $('#myDiv').text();
//     console.log('content1');
//     console.log('content2');

//     $('#myDiv').text('<a href="http://google.com.tw">google</a>')
//  })

// $('document').ready(function(){
//   $('#myBtn').on('click', function(){
//     $('#myInput').val('*********');
//   });
// })

$('document').ready(function(){
  // $('#div2').append('<a href="#">append</a>');
  // $('#div2').preppend('<a href="#">preppend</a>');
  // $('#div2').before('<a href="#">before</a>');  
  // $('#div2').after('<a href="#">after</a>');
  $('#myBtn').on('click', function(){
      $('#myLink').attr('href', 'https://moli.rocks');
      
  });
})