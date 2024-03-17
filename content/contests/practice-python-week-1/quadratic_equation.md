---
title: Quadratic Equation
description:
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

Given coefficients A, B, and C of a quadratic equation, check if the roots are real and distinct. Print "YES" if they are real and distinct, otherwise print "NO".

</br>

**Input Format:**

A single line containing three space-separated integers, representing the coefficients A, B, and C of the quadratic equation.

**Output Format:**

Print "YES" if the roots are real and distinct, otherwise print "NO".

**Constraints:**

* 1 ≤ |A|, |B|, |C| ≤ 100

**Sample Input:**

{{< file "terminal" "Sample Input" >}}

```md
10 7 12
```

**Sample Output:**

{{< file "terminal" "Sample Ouput" >}}

```md
NO
```

## Solution

<!-- **Approach:** -->

{{< file "python" "quadratic_equation.py" >}}

```py
l = list(map(int, input().split()))
if l[1]**2 - 4*l[2] > 0:
    print("YES")
else:
    print("NO")
```
