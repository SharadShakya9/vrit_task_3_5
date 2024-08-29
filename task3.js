/* Write a function that takes an array of positive integers and returns the length of the longest chain of consecutive numbers. A chain is defined as a sequence of numbers in the array where each number is exactly one more than the previous number in the sequence, and the sequence can be in any order in the array. Also explain the time complexity and space complexity */

const longestChain = (array) => {
    const arraySet = new Set(array);
    let longest = 0;

    for (let n of array) {
        if (!arraySet.has(n - 1)) {
            let length = 1;

            while (arraySet.has(n + length)) {
                length++
            }

            longest = Math.max(longest, length)
        }
    }

    return longest
}

const numbers = [1, 4, 5, 7, 2, 3, 40, 41, 42, 43, 44, 45]
console.log(longestChain(numbers))

/*
Time Complexity

-   The line 'const arraySet = new Set(array);' creates a Set of   the array which involves iterating through whole array, so its time complexity is O(n).
- The for loop iterates through each element of the array, so the loop runs 'n' times, so its time complexity is O(n)
-The inner while loop checks all the consecutive integers in the array but the outer loop checks all the elements only once so in worst case, the while loop iterates 'n' times. So the time complexity is O(n)
- Thus, the total time complexity is: O(n) + O(n) + O(n) = O(n)

Space Complexity

- The arraySet stores unique elements of the array. In worst case, the arraySet stores all 'n' elements of the array. Here, the space complexity is O(n).
- The variables longest and length use constant space O(1)
- Thus, the total space complexity is O(n)

Summary:
Time Complexity: O(n)
Space Complexity: O(n)
*/