---
title: Max Score in Roe
description: Problem 5
reading_time: 4 min
---

##### Problem Statement

There are N x M students in the class. Each student was given a score. On the ground all students are arranged in an Nx M grid M students in each row. Now, your task is to find the maximum score in each row and print them.

</br>

**Input Format:**

- The first line contains an integer T, the number of test cases.
- The first line of each test case contains two positive integers N and M
- The next N lines contains M inputs of the matrix

**Output Format:**

- For each test case, print all the maximum scores of students in each row separated by spaces.

**Constraints:**

- 1 <= T <= 10
- 1 <= N, M <= 100
- 1 <= A[i][j] <= 10<sup>5</sup> for all 1 <= i <= N && 1 <= j <= M

**Sample Input:**

{{< file "terminal" "Sample Input" >}}

```md
1
4 5
95 92 93 96 100
91 88 94 92 89
87 85 90 86 88
94 90 93 88 86
```

**Sample Output:**

{{< file "terminal" "Sample Output" >}}

```md
100 94 90 94 88
```

## Solution

<!-- **Approach:** -->

{{< file "python" "max_score_in_row.py" >}}

```py
for _ in range(int(input())):
    r, c = list(map(int, input().split()))
    m = [list(map(int, input().split())) for i in range(r)]
    print(*[max(mxRow) for mxRow in m])
```
