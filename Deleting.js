  var nums = [2,3,7,4,65]
  var newEl = 78;
  var position = 2;

 // for loop
 for(var i = nums.length; i>=0;i--){
     if(i>position){
         nums[i+1] = nums[i]
         nums[i] = position
         nums[i] = newEl
     }
 }
 console.log(nums);

// // // Deleting Array

// // var arr = [8,9,5,2,12];
// // var position = 3;

// // for(var i = position ; i<arr.length-1; i++){
     
// //     arr[i] = arr[i+1]

// // }
// // arr.length = arr.length-1;
// // console.log(arr)


// // var nums = [0,1,0,1,1,1,2,2,3,3,4];
// // var fName = "Ankita"; //0-5
// // //for loop
// // var finalResult = [];

// // for(var i = 0; i<nums.length; i++) {
// //     //console.log(nums[i])
// //     var firstVal = nums[i];
// //     if(firstVal == nums[i+1]) { //[0,0 //[0,0,1
// //         continue;
// //     } else {
// //         finalResult.push(firstVal);
// //     }
// // }

// // console.log(finalResult)


 var y = [5,6,7,8]
   var position = 1;

 for(var i = position; i<y.length-1;i++){
     y[i] = y[i+1]
 }
  y.length = y.length-1;
 console.log(y)





















// var y =[3,5,7,8];
// var position = 2;
// for(var i = position; i<y.length-1;i++){
//     y[i] = y[i+1]
// }
// y.length = y.length-1
// console.log(y)

var sums = [23,5,61,45,78]
for(var i = 0; i<sums.length;){
    if(sums[i]>sums[i+1]){
        var points = sums[i]
        var points1 = sums[i+1]
        sums[i] = points1;
        sums[i+1]= points;
        i--;

    }else{
        i++
    }
}
console.log(sums)