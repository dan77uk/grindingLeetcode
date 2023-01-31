# 26. Remove Duplicates from Sorted Array

### Problem:

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

[View problem on Leetcode](https://leetcode.com/problems/remove-duplicates-from-sorted-array)

### The Solution

![Image of solution stats](Screen%20Shot%202023-01-31%20at%2016.21.06%20pm.png)

Quite a badly worded Leetcode problem, even if it is catagorised as 'easy' (nearly 14,000 thumbs down!). They don't need the duplicates removed, they just want the unique values sorted to the front of the array, in place, with no extra memory used.

The solution is achieved by initialising a pointer [left] at array[1] and then a iterating over the array once, also beginning at array[1].

If the value at array[i] in the first iteration is NOT equal to array[i - 1] - is unique, the value at array[left] is set to the value of the array[i], and [left] is increased by 1.

If the value at array[i] in the next iteration IS equal to array[i - 1], the [left] pointer remains in place, and [i] moves onto the next value.

This pushes (or reassigns) all the unique values to the beginning of the array, and what comes after the unique values is not important for the problem.

This has a BigO notation of O(n) because we have to loop over the full length of the array only once.
