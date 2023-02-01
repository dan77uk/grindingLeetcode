# 682. Baseball Game

## The Problem

You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

    An integer x.
        Record a new score of x.
    '+'.
        Record a new score that is the sum of the previous two scores.
    'D'.
        Record a new score that is the double of the previous score.
    'C'.
        Invalidate the previous score, removing it from the record.

Return the sum of all the scores on the record after applying all the operations.

## The Solution

![Image of solution stats](baseballgame.png)

My solution uses a stack to keep track of the scores, where the most recent score is always on the top of the stack.

It beats 82% of submissions for time, and 93% for memory, with a Big O of O(n) for both time and space complexity, as each operation is constant time, and the maximum size of the stack is equal to the length of the operations array.

The function uses a for loop to iterate through the operations array, and a switch statement to perform the appropriate operation based on the value of each element in the operations array. After the loop, the sum of the scores in the stack is returned by using reduce.
