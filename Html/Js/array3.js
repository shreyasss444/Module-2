/*let nos =[1, 2, 3, 4, 5];
//shift the element
let no=nos.shift(1);
console.log("element shifted",no)
//print the array after shift
console .log("array after shifted ",nos)
nos.unshift(6);``
//print the array after unshift
console.log("array after unshift",nos);
let array =[1, 2, 3, 4, 5];
/*array.splice(1,4);//index ,no of elements
console.log("array after splice",array);
array.splice(1,0,2);
console.log("array after adding splice ",array);*/

//insert  50 at index 4
//replace 2,3,4, with 34 45 67
let nos = [10, 20, 30, 40, 50];
// shift the elements
let no = nos.shift(1);
//print the shifter 
console.log("Elements shifted ",no);
//print the array after shift
console.log("Array after shift ",nos);
//unshift
nos.unshift(1100);
// print array after unshift
console.log("Array after unshift ", nos);

//splice

let arr = [100, 200, 300, 400, 500];
console.log("arr ",arr)
//arr.splice(2,2);   // index, no elements
//console.log("Array after splice ",arr);

arr.splice(1,1,12,13,14); // index replace, what to replace
console.log("Array after adding splice ",arr);
console.log(arr.slice(2,15));
