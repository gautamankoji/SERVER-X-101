---
title: List of Lists
description:
reading_time: 2 min
author: Gautam Ankoji
---

##### Problem Statement

You are given a list of lists. Find the list whose sum of elements is the highest.

**Sample Input:**

{{< file "terminal" "Sample Input" >}}

```md
3
1 2 3
4 5 6
7 8 9
123
```

**Sample Output:**

{{< file "terminal" "Sample Ouput" >}}

```md
7 8 9
```

## Solution

<!-- **Approach:** -->

{{< file "python" "list_of_lists.py" >}}

```py
n = int(input())
l = [list(map(int, input().split())) for _ in range(n)]
print(*max(l, key=sum))
```
