// var Counter = (function(){
//   var _count = 0;

//   function add(c = 1){
//       _count += (+c);
//   }
//   function getCount(){
//      return _count;
//   }
//   return {
//     add,
//     getCount
//   };
// })();

function a(callback) {
    console.log('兩秒後執行 callback');
    setTimeout(function () {
        console.log('正在執行 callback');
        callback();
    }, 2000);
}
a(function () {
    console.log('Narrrrrrrrrrrrrrrrrr');
});
console.log('可以做其他事呢');
