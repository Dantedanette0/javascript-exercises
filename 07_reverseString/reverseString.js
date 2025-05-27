const reverseString = function(s) {
let arr = s.split('');     
let left = 0;
let right = arr.length - 1;
while (left < right) {
  const tmp     = arr[left];
  arr[left]  = arr[right];
  arr[right] = tmp;
  left++;
  right--;
}
return arr.join('');  
};


// Do not edit below this line
module.exports = reverseString;
