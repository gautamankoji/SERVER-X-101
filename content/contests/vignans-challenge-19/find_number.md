---
title: Find Number
description: Problem 4
reading_time: 4 min
---

#### Problem Statement

Hari needs to convert alphabets to their corresponding numerical positions (a = 1, b = 2, ..., z = 26). Help him with the conversions!

</br>

**Input Format:**

The first line contains an integer, T, representing the number of test cases (1 <= T <= 10).

Each test case consists of a single line containing an alphabet (either uppercase or lowercase).

**Output Format:**

For each test case, print the corresponding number on a new line.

**Constraints:**

- Alphabets can be in both uppercase and lowercase.

**Sample Input:**

{{< file "terminal" "Sample Input" >}}

```md
4
a
A
z
Z
```

**Sample Output:**

{{< file "terminal" "Sample Output" >}}

```md
1
1
26
26
```

## Solution

<!-- **Approach:** -->

{{< file "python" "find_number.py" >}}

```py
for _ in range(int(input())):
    c = input()
    print(ord(c.upper()) - ord('A') + 1)
```
