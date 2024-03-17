---
title: Set Clear
description:
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

You will be given a number N. Clear the rightmost set bit of the number and print the result.

**Input Format:**

An integer N

**Output Format:**

Print the output

**Constraints:**

* Time Limit: 50 seconds
* Memory Limit: 256 MB

**Sample Input:**

{{< file "terminal" "Sample Input" >}}

```md
5
```

**Sample Output:**

{{< file "terminal" "Sample Ouput" >}}

```md
4
```

## Solution

<!-- **Approach:** -->

{{< file "python" "set_clear.py" >}}

```py
n = int(input())
print(n & (n - 1))
```
