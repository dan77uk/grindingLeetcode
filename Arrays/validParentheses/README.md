# 20. Valid Parentheses

## The Problem

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.

## The Solution

My solution checks if the string contains valid parentheses by using a stack and a hash map.

![Image of solution stats](screenshot.png)

The stack is used to keep track of the open parentheses in the string and the hash map is used to store the mapping between a closing parentheses and its corresponding opening parentheses.

The function starts by checking if the input string (s) is empty. If it is, the function returns true, indicating that the input is a valid parentheses string.

The function then loops through the input string character by character. For each character, the function checks if the character is a closing parentheses and if it is, the function retrieves the top element of the stack. If the top element of the stack is not equal to the corresponding opening parentheses stored in the hash map, the function returns false, indicating that the input string is not a valid parentheses string. If the character is not a closing parentheses, the function pushes the character onto the stack.

Finally, the function checks if the stack is empty. If it is, the function returns true, indicating that the input string is a valid parentheses string and all open parentheses have been closed in the correct order. If the stack is not empty, the function returns false, as all parentheses have not been closed.
