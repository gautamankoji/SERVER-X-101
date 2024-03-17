---
title: Prime Setbits
description:
reading_time: 3 min
author: Gautam Ankoji
---

##### Problem Statement

Tesla is working on prime numbers. He wants to find all the numbers whose total number of set bits is prime. You, being his lab partner, are expected to help Tesla with his new theory. You are given N, and you need to print all the numbers inclusive of N, whose count of set bits is prime.

**Input Format:**

* The first line contains T, the number of test cases.
* Each test case contains N.

**Output Format:**

* Print the numbers inclusive of N, whose count of set bits is prime.

**Constraints:**

* 1 <= T <= 10
* 2 <= N <= 10<sup>6</sup>

**Sample Input:**

{{< file "terminal" "Sample Input" >}}

```md
1
5
```

**Sample Output:**

{{< file "terminal" "Sample Ouput" >}}

```md
3 5
```

## Solution

<!-- **Approach:** -->

{{< file "python" "prime_setbits.py" >}}

```py
for _ in range(int(input())):
    n = int(input())
    for i in range(1, n + 1):
        setCnt = 0
        temp = i
        while temp:
            setCnt += tem & 1
            temp >>= 1
        prime = False
        if setCnt > 1:
            prime = True
            for j in range(2, int(setCnt**0.5) + 1):
                if setCnt % j = 0:
                    prime = False
                    break
        if prime:
            print(i, end=" ")
    print()
```
