// given an array of integers nums and an integer target
// return indices of the two numbers such that they
// add up to target.
// you may assume that each input would have exactly one
// solution, and you may not use the same element twice.
// return the anser in any order

// input: nums = [2,7,11,15], target = 9;
// output: [0,1];
// output: because nums[0] + nums[1] == 9, we return [0,1]


function twoSum(nums, target) {
  let arr = [];
  for(let i = 0; i < nums.length; i++){
    for(let j = i + 1; j < nums.length; j++){
      if(nums[i] + nums[j] === target){
        arr.push(i, j);
      }
    }
  }
  return arr;
}