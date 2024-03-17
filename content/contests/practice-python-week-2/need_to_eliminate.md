---
title: Need to Eliminate
description:
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

Find out max no. of adjacent set bits.

</br>

**Input Format:**

The first line contains an integer T, the number of test cases.

Each of the next T lines contains a binary string.

**Constraints:**

* 1 <= T <= 10
* The length of each binary string is between 5 and 10.

**Sample Input:**

```md
3
111011110
1101101101
11101110111
```

**Sample Output:**

```md
4
2
3
```

## Solution

<!-- **Approach:** -->

{{< file "python" "count_of_family_members.py" >}}

```py
for _ in range(int(input())):
    bin_str = input()
    print(max(map(len, bin_str.split('0'))))
```
