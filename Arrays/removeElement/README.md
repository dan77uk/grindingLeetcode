# 27. Remove Element

Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

[View problem on Leetcode](https://leetcode.com/problems/remove-element/)

### The Solution

![Image of solution stats](screenshot.png)

The solution is achieved by using a pointer and iterating over the array once. The manpulation of the array also has to happen 'in place'.

The pointer is set to nums[0] and the iteration also starts at nums[0]. If the
