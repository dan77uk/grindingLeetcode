# 27. Remove Element

Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

[View problem on Leetcode](https://leetcode.com/problems/remove-element/)

### The Solution

![Image of solution stats](screenshot.png)

The solution is achieved by using a pointer and iterating over the array once. The manpulation of the array also has to happen 'in place'.

The pointer is set to nums[0] and the iteration also starts at nums[0]. If the value at nums[0] DOES NOT MATCH the val integer passed to the function, then the value the pointer is currently pointing at is set to the value the iterator is currntly pointing at, and the pointer value is increased by one.

This pushes (or reassigns) all the values which are not the passed val integer to the beginning of the array, and what comes after the those values is not important for the problem.

This has a BigO notation of O(n) because we have to loop over the full length of the array only once.
