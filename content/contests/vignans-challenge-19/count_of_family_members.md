---
title: Count of Family Members 
description: Problem 1
topic_start: Tech Mahindra Coding Round
reading_time: 4 min

---

##### Problem Statement

You are given a string representing the qualities of people. People with the same qualities are considered family members. You are tasked with finding the count of family members for a given individual.

</br>

**Input Format:**

* The first line contains an integer T, the number of test cases.
* The first line of each test case contains a string S representing the qualities of people in the group.
* The second line of each test case contains a string representing the quality of the individual.

**Output Format:**

* For each test case, print the count of family members for the individual.

**Constraints:**

* 1 <= T <= 100
* The string S consists of only lowercase alphabets.

**Sample Input:**

{{< file "terminal" "Sample Input" >}}

```md
2
aabbaa
a
abbccdd
c
```

**Sample Output:**

{{< file "terminal" "Sample Output" >}}

```md
3
2
```

**Explanation:**

* In the first test case, "aabbaa", the individual with quality "a" has 3 family members ("aaa").
* In the second test case, "abbccdd", the individual with quality "c" has 2 family members ("cc").

## Solution

<!-- **Approach:** -->

{{< file "python" "count_of_family_members.py" >}}

```py
for _ in range(int(input())):
    s = input()
    c = input()
    print(s.count(c))
```
