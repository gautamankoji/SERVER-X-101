---
title: DSA Mastery
description: Roadmap to Master Data Structures and Algorithms
author: Gautam Ankoji
lastmod: 2024-02-27T08:36:36-07:00
tags:
    - dsa
    - programming
github: https://github.com
---

<div class="box box-green">
  
  **DSA Mastery in 9 Weeks: Read, Solve, Code!**
</div>

</br>

## Data Structures and Algorithms Roadmap

<div>

   <img src="./img/dsa-roadmap.png" title="DSA Roadmap" alt="DSA Roadmap"/>

</div>

## Five steps to Mastering DSA

Mastering DSA as a beginner is simplified into 5 steps:

1. Choose a programming language.
2. Understand time and space complexities.
3. Learn basic data structures and algorithms.
4. Practice a lot.
5. Join competitions to get really good.

## INDEX

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <ul class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
       <li><a href="#i-master-at-least-one-programming-language"><b>1. Master at least one Programming Language</b></a></li>
       <li><a href="#ii-understand-complexities"><b>2. Understand Complexities</b></a></li>
       <li>
           <a href="#iii-learn-essential-data-structures-and-algorithms"><b>3. Learn essential Data Structures and Algorithms</b></a>
           <ul>
               <li><a href="#iii1-mathematics-basic">3.1 - Mathematics Basic</a></li>
               <li><a href="#iii2-array">3.2 - Array</a></li>
               <li><a href="#iii3-string">3.3 - String</a></li>
               <li><a href="#iii4-stack">3.4 - Stack</a></li>
               <li><a href="#iii5-queue">3.5 - Queue</a></li>
               <li><a href="#iii6-searching-algorithm">3.6 - Searching Algorithm</a></li>
               <li><a href="#iii7-sorting-algorithm">3.7 - Sorting Algorithm</a></li>
               <li><a href="#iii8-divide-and-conquer-algorithm">3.8 - Divide and Conquer Algorithm</a></li>
               <li><a href="#iii9-linked-list">3.9 - Linked List</a></li>
               <li><a href="#iii10-tree-data-structure">3.10 - Tree Data Structure</a></li>
               <li><a href="#iii11-graph-data-structure">3.11 - Graph Data Structure</a></li>
               <li><a href="#iii12-recursion">3.12 - Recursion</a></li>
               <li><a href="#iii13-backtracking-algorithm">3.13 - Backtracking Algorithm</a></li>
               <li><a href="#iii14-dynamic-programming">3.14 - Dynamic Programming</a></li>
               <li><a href="#iii15-greedy-methodology">3.15 - Greedy Methodology</a></li>
               <li><a href="#iii16-mathematics-advanced">3.16 - Mathematics Advanced</a></li>
            </ul>
       <li><a href="#iv-practice-consistently-and-extensively"><b>4. Practice consistently and extensively</b></a></li>
       <li><a href="#v-compete-to-advance-and-become-proficient"><b>5. Compete to advance and become proficient</b></a></li>
        </li>
    </ul>
</div>

### I. Master at least one Programming Language

Embark on your data structures and algorithms journey by mastering a programming language. Just as we learn the alphabet and grammar before writing essays, understanding the basics of a language is essential for programming.

Choose a language, whether it's [**Java**](https://www.geeksforgeeks.org/java/), [**C**](https://www.geeksforgeeks.org/c-programming-language/), [**C++**](https://www.geeksforgeeks.org/c-plus-plus/), [**Python**](https://www.geeksforgeeks.org/python-programming-language/), or any other of your preference. Before diving into coding, grasp the foundational elements of the language, including basic syntax, data types, variables, operators, conditional statements, loops, functions, etc. Optionally, explore Object-Oriented Programming (OOP) concepts to strengthen your coding foundation.

### II. Understand Complexities

Now, let's delve into an interesting and crucial topic. The main goal of using DSA is to solve problems effectively and efficiently. How do you assess if your program is efficient? This is where complexities come in, and there are two types:

1. **Time Complexity:** It measures the time needed to execute the code.
2. **Space Complexity:** It indicates the space required for the code to function successfully.
3. **Design And Analysis Of Algorithms**
   - Designing efficient algorithms and analyzing their performance.
   - Lecture Notes: <a href="https://ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2012/pages/lecture-notes/" class="font-bold">Design And Analysis Of Algorithms</a>

In DSA, you'll often encounter the term Auxiliary Space, referring to extra space used in the program beyond the input data structure.

It overlooks system-dependent constants and focuses solely on the number of modular operations performed in the entire program. Three commonly used asymptotic notations describe the time complexity of algorithms:

1. **Big-O Notation (Ο):** Describes the worst-case scenario.
2. **Omega Notation (Ω):** Specifies the best-case scenario.
3. **Theta Notation (θ):** Represents the average complexity of an algorithm.

##### Asymptotic analysis (Big-O notation)

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
   <strong>Basics: Asymptotic analysis</strong>
   <ul>
       <li>Big-O notation in 5 minutes: <a target="_blank" href="https://www.youtube.com/watch?v=__vX2sjlpXU"><b>YouTube</b></a></li>
       <li>Particularly for Big-O notation: <a target="_blank" href="https://runestone.academy/ns/books/published//pythonds/AlgorithmAnalysis/toctree.html"><b>runestone.academy</b></a></li>
   </ul>
   <strong>Advanced: Asymptotic analysis</strong>
   <ul>
       <li>A beginner's guide to Big O notation: <a target="_blank" href="https://robbell.io/2009/06/a-beginners-guide-to-big-o-notation"><b>rob-bell.net</b></a></li>
       <li>Particularly for Big-O notation: <a target="_blank" href="https://www.youtube.com/watch?v=v4cd1O4zkGw"><b>YouTube</b></a></li>
       <li>Lecture 2: Asymptotic Notation CSCI 700: <a target="_blank" href="https://web.archive.org/web/20171215122943/http://eniac.cs.qc.cuny.edu/andrew/csci700/lecture2.pdf"><b>web.archive.org</b></a></li>
   </ul>
   <strong>Practice: Time and Space Complexity</strong>
   <ul>
       <li>MCQs - Time and Space Complexity: <a target="_blank" href="https://discuss.codechef.com/t/multiple-choice-questions-related-about-time-and-space-complexity-of-a-program/17976"><b>CodeChef</b></a></li>
       <li>Particularly for Big-O notation: <a target="_blank" href="https://www.youtube.com/watch?v=v4cd1O4zkGw"><b>YouTube</b></a></li>
       <li>Practice Problems: <a target="_blank" href="https://www.iitk.ac.in/esc101/08Jul/lecnotes/practise_sol.pdf"><b>IITK Lecture Practice</b></a></li>
   </ul>
</div>

[**Back To Top 🠉**](#index)

### III. Learn essential Data Structures and Algorithms

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <h4>Data Structures and Algorithms</h4>
  <ul class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
   <li><a href="#iii1-mathematics-basic">3.1 - Mathematics Basic</a></li>
   <li><a href="#iii2-array">3.2 - Array</a></li>
   <li><a href="#iii3-string">3.3 - String</a></li>
   <li><a href="#iii4-stack">3.4 - Stack</a></li>
   <li><a href="#iii5-queue">3.5 - Queue</a></li>
   <li><a href="#iii6-searching-algorithm">3.6 - Searching Algorithm</a></li>
   <li><a href="#iii7-sorting-algorithm">3.7 - Sorting Algorithm</a></li>
   <li><a href="#iii8-divide-and-conquer-algorithm">3.8 - Divide and Conquer Algorithm</a></li>
   <li><a href="#iii9-linked-list">3.9 - Linked List</a></li>
   <li><a href="#iii10-tree-data-structure">3.10 - Tree Data Structure</a></li>
   <li><a href="#iii11-graph-data-structure">3.11 - Graph Data Structure</a></li>
   <li><a href="#iii12-recursion">3.12 - Recursion</a></li>
   <li><a href="#iii13-backtracking-algorithm">3.13 - Backtracking Algorithm</a></li>
   <li><a href="#iii14-dynamic-programming">3.14 - Dynamic Programming</a></li>
   <li><a href="#iii15-greedy-methodology">3.15 - Greedy Methodology</a></li>
   <li><a href="#iii16-mathematics-advanced">3.16 - Mathematics Advanced</a></li>
  </ul>
</div>

### III(1). Mathematics Basic

##### Basic Mathematics in DSA

- Fundamental for evaluating algorithm effectiveness.
- Essential for problems with mathematical characteristics.
- Crucial for mastering Data Structures and Algorithms.

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <strong>Resources: Mathematics</strong>
    <ul class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <li><a target="_blank" href="https://www.geeksforgeeks.org/maths-for-data-structure-and-algorithms-dsa-a-complete-guide/#1-gcd-and-hcf-euclidean-algorithm"><b>GFG: GCD and HCF (Euclidean Algorithm)</b></a></li>
        <li><a target="_blank" href="https://www.geeksforgeeks.org/maths-for-data-structure-and-algorithms-dsa-a-complete-guide/#2-divisors-of-a-number"><b>GFG: Divisors of a number</b></a></li>
        <li><a target="_blank" href="https://www.geeksforgeeks.org/maths-for-data-structure-and-algorithms-dsa-a-complete-guide/#3-prime-numbers-using-sieve-of-eratosthenes/"><b>GFG: Prime numbers using Sieve of Eratosthenes</b></a></li>
        <li><a target="_blank" href="https://www.geeksforgeeks.org/maths-for-data-structure-and-algorithms-dsa-a-complete-guide/#4-square-root"><b>GFG: Square root</b></a></li>
        <li><a target="_blank" href="https://www.geeksforgeeks.org/maths-for-data-structure-and-algorithms-dsa-a-complete-guide/#5-modular-arithmetic"><b>GFG: Modular Arithmetic</b></a></li>
        <li><a target="_blank" href="https://www.geeksforgeeks.org/maths-for-data-structure-and-algorithms-dsa-a-complete-guide/#6-fast-powerexponentiation-by-squaring"><b>GFG: Fast Power-Exponentiation by Squaring</b></a></li>
        <li><a target="_blank" href="https://www.geeksforgeeks.org/maths-for-data-structure-and-algorithms-dsa-a-complete-guide/#7-factorial-of-a-number"><b>GFG: Factorial of a number</b></a></li>
        <li><a target="_blank" href="https://www.geeksforgeeks.org/maths-for-data-structure-and-algorithms-dsa-a-complete-guide/#8-fibonacci-number"><b>GFG: Fibonacci Number</b></a></li>
        <li><a target="_blank" href="https://www.geeksforgeeks.org/maths-for-data-structure-and-algorithms-dsa-a-complete-guide/#9-catalan-numbers"><b>GFG: Catalan Numbers</b></a></li>
        <li><a target="_blank" href="https://www.geeksforgeeks.org/maths-for-data-structure-and-algorithms-dsa-a-complete-guide/#10-euler-totient-function"><b>GFG: Euler Totient Function</b></a></li>
        <li><a target="_blank" href="https://www.geeksforgeeks.org/maths-for-data-structure-and-algorithms-dsa-a-complete-guide/#11-prime-numbers-primality-tests"><b>GFG: Prime numbers & Primality Tests</b></a></li>
        <li><a target="_blank" href="https://www.geeksforgeeks.org/maths-for-data-structure-and-algorithms-dsa-a-complete-guide/#12-prime-factorization-divisors"><b>GFG: Prime Factorization & Divisors</b></a></li>
        <li><a target="_blank" href="https://www.geeksforgeeks.org/maths-for-data-structure-and-algorithms-dsa-a-complete-guide/#13-chinese-remainder-theorem"><b>GFG: Chinese Remainder Theorem</b></a></li>
        <li><a target="_blank" href="https://www.geeksforgeeks.org/maths-for-data-structure-and-algorithms-dsa-a-complete-guide/#practice-problems-based-on-maths-for-dsa"><b>GFG: Practice Problems based on Maths for DSA</b></a></li>
    </ul>
</div>

### III(2). Array

The array is a fundamental and crucial data structure, presenting a linear arrangement of elements. It serves as a collection of homogeneous data types, with elements allocated contiguous memory. Thanks to this contiguous allocation, accessing any array element occurs in constant time. Each array element is identified by a corresponding index number.

<!-- <p align="center"> -->
   <!-- </br> -->
   <!-- <img src="./assets/data_structures/array-data-structure.jpg" alt="Array Data Structure"> -->
   <!-- <div align="center"><h6><i>Array Data Structure</i></h6></div> -->
<!-- </p> -->

Additional Array Topics to Explore

- **Rotation of Array:** Shifting elements in a circular manner, such as right circular shift where the last element becomes the first.
- **Rearranging an array:** Changing the initial order of elements based on specific conditions or operations.
- **Range queries in the array:** Performing operations on a range of elements, often referred to as range queries.
- **Multidimensional array:** Arrays with more than one dimension, commonly encountered in the form of 2-dimensional arrays, known as matrices.
- **Kadane’s algorithm**
- **Dutch national flag algorithm**

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <strong>Resources: Arrays</strong>
  <ul>
    <li><p>Data Structure Tutorial: Array - <a target="_blank" href="https://discuss.codechef.com/t/data-structure-tutorial-array/13551"><b>CodeChef</b></a></p></li>
    <li><p>Arrays: Lecture Notes - <a target="_blank" href="https://runestone.academy/ns/books/published//pythonds/AlgorithmAnalysis/toctree.html"><b>cs.cmu.edu</b></a></p></li>
    <li><p>Arrays Data Structure - <a target="_blank" href="http://www.geeksforgeeks.org/array-data-structure/"><b>geeksforgeeks.org</b></a></p></li>
  </ul>
  <strong>Practice Problems: Arrays</strong>
  <ul>
    <li><p>Little Elephant and Candies - <a target="_blank" href="https://www.codechef.com/problems/LECANDY"><b>CodeChef: LECANDY</b></a> - <a target="_blank" href="https://discuss.codechef.com/t/lecandy-editorial/275"><b>Editorial</b></a></p></li>
    <li><p>Chef and Notebooks - <a target="_blank" href="https://www.codechef.com/problems/CNOTE"><b>CodeChef: CNOTE</b></a> - <a target="_blank" href="https://discuss.codechef.com/questions/65992/cnote-editorial"><b>Editorial</b></a></p></li>
    <li><p>The Minimum Number Of Moves - <a target="_blank" href="https://www.codechef.com/problems/SALARY"><b>CodeChef: SALARY</b></a> - <a target="_blank" href="https://discuss.codechef.com/questions/5144/salary-editorial"><b>Editorial</b></a></p></li>
    <li><p>Mutated Minions - <a target="_blank" href="https://www.codechef.com/problems/CHN15A"><b>CodeChef: CHN15A</b></a> - <a target="_blank" href="https://discuss.codechef.com/questions/77487/chn15a-editorial"><b>Editorial</b></a></p></li>
    <li><p>Chef and Rainbow Array - <a target="_blank" href="https://www.codechef.com/problems/RAINBOWA"><b>CodeChef: RAINBOWA</b></a> - <a target="_blank" href="https://discuss.codechef.com/questions/107967/rainbowa-editorial"><b>Editorial</b></a></p></li>
    <li><p>Forgotten Language - <a target="_blank" href="https://www.codechef.com/problems/FRGTNLNG"><b>CodeChef: FRGTNLNG</b></a> - <a target="_blank" href="https://discuss.codechef.com/questions/75211/frgtnlng-editorial"><b>Editorial</b></a></p></li>
    <li><p>Leetcode: Interview Practice - <a target="_blank" href="https://leetcode.com/tag/array/"><b>Leetcode: Practice Arrays</b></a> - <b>Interview Level</b></p></li>
  </ul>
</div>

### III(3). String

A string, essentially a type of array, can be seen as an array of characters. However, it possesses distinct features, such as the last character being a null character to signify the string's end. Unique operations, like concatenation merging two strings into one, further set strings apart.

<!-- img -->

Additional String Concepts to Explore

- **Subsequence and Substring:** A subsequence is derived from a string by deleting one or more elements, while a substring is a contiguous segment of the string.
- **Reverse and Rotation in a String:** Reversing involves interchanging character positions, while rotation shifts elements circularly.
- **Binary String:** Comprising only two types of characters.
- **Palindrome:** A string with elements equidistant from its center being the same.
- **Lexicographic Pattern:** A pattern based on ASCII values or in dictionary order.
- **Pattern Searching:** Advanced topic involving searching for a given pattern within the string.

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <strong>Resources: Strings</strong>
  <ul>
      <li><p>C++ Strings - <a target="_blank" href="https://www.tutorialspoint.com/cplusplus/cpp_strings.htm"><b>tutorialspoint.com</b></a></p></li>
      <li><p>Java strings - <a target="_blank" href="https://www.guru99.com/java-strings.html"><b>guru99.com</b></a></p></li>
      <li><p>Python strings - <a target="_blank" href="https://docs.python.org/2/library/string.html"><b>docs.python.org</b></a></p></li>
      <li><p>Python strings - <a target="_blank" href="https://www.tutorialspoint.com/python/python_strings.htm"><b>tutorialspoint.com</b></a></p></li>
      <li><p>Many string questions - <a target="_blank" href="http://www.geeksforgeeks.org/string-data-structure/"><b>geeksforgeeks.org</b></a></p></li>
  </ul>
  <strong>Practice Problems: Strings</strong>
  <ul>
      <li><p>Count Substrings - <a target="_blank" href="https://www.codechef.com/JULY14/problems/CSUB"><b>CodeChef: CSUB</b></a> - <a target="_blank" href="https://discuss.codechef.com/t/csub-editorial/6299"><b>Editorial</b></a></p></li>
      <li><p>Lapindromes - <a target="_blank" href="https://www.codechef.com/JUNE13/problems/LAPIN"><b>CodeChef: LAPIN</b></a> - <a target="_blank" href="https://discuss.codechef.com/t/lapin-editorial/2335"><b>Editorial</b></a></p></li>
      <li><p>Leetcode: Interview Practice - <a target="_blank" href="https://leetcode.com/tag/string/"><b>Leetcode: Practice Strings</b></a> - <b>Interview Level</b></p></li>
  </ul>
</div>

### III(4). Stack

Transitioning to more complex data structures, let's explore the Stack and Queue.

A Stack is a linear data structure that adheres to a specific order for its operations. This order can be LIFO (Last In First Out) or FILO (First In Last Out).

<!-- img -->

The complexity of the Stack as a data structure arises from its implementation, utilizing other data structures like Arrays, Linked lists, etc., chosen based on the characteristics and features specific to the Stack data structure.

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <strong>Resources: Stacks</strong>
  <ul>
      <li><p>Stack Data Structure - <a target="_blank" href="http://www.geeksforgeeks.org/stack-data-structure/"><b>geeksforgeeks.org</b></a></p></li>
      <li><p>Stack Data Structure - <a target="_blank" href="https://www.tutorialspoint.com/data_structures_algorithms/stack_algorithm.htm"><b>tutorialspoint.com</b></a></p></li>
      <li><p>Stacks: Lecture Notes - <a target="_blank" href="https://www.cs.cmu.edu/~wlovas/15122-r11/lectures/10-stacks.pdf"><b>cs.cmu.edu</b></a></p></li>
  </ul>
  <strong>Practice Problems: Stacks</strong>
  <ul>
      <li><p>Just Next - <a target="_blank" href="https://www.spoj.com/problems/JNEXT/"><b>spoj.com: JNEXT</b></a></p></li>
      <li><p>Transform the Expression - <a target="_blank" href="https://www.spoj.com/problems/ONP/"><b>spoj.com: ONP</b></a></p></li>
      <li><p>Largest Rectangle in a Histogram - <a target="_blank" href="https://www.spoj.com/problems/HISTOGRA/"><b>spoj.com: HISTOGRA</b></a></p></li>
      <li><p>Compilers and parsers - <a target="_blank" href="https://www.codechef.com/problems/COMPILER"><b>CodeChefL COMPILER</b></a></p></li>
      <li><p>Leetcode: Interview Practice - <a target="_blank" href="https://leetcode.com/tag/stack/"><b>Leetcode: Practice Stacks</b></a></p></li>
  </ul>
</div>

[**Back To Top 🠉**](#index)

### III(5). Queue

Similar to a Stack but with distinct characteristics, the Queue is another linear data structure.

A Queue operates on the principle of First In First Out (FIFO) in its individual operations.

<!-- img -->

Different types of queues include:

- **Circular Queue:** The last element is connected to the first element, forming a circular structure.
- **Double-ended Queue (Deque):** Allows operations from both ends of the queue.
- **Priority Queue:** Elements are arranged based on priority, with lower-priority elements dequeued after higher-priority ones.

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <strong>Resources: Queues</strong>
  <ul>
    <li><p>Array Implementation of Queue - <a target="_blank" href="http://www.geeksforgeeks.org/queue-set-1introduction-and-array-implementation/"><b>geeksforgeeks.org</b></a></p></li>
    <li><p>Stacks and Queues - <a target="_blank" href="https://viterbi-web.usc.edu/~adamchik/15-121/lectures/Stacks%20and%20Queues/Stacks%20and%20Queues.html"><b>viterbi-web.usc.edu</b></a></p></li>
    <li><p>Stacks and Queues - <a target="_blank" href="https://www.cs.cmu.edu/~rjsimmon/15122-s13/09-queuestack.pdf"><b>cs.cmu.edu</b></a></p></li>
  </ul>
  <strong>Practice Problems: Queues</strong>
  <ul>
    <li><p>Mass of Molecule - <a target="_blank" href="https://www.spoj.com/problems/MMASS/"><b>spoj.com: MMASS</b></a></p></li>
    <li><p>Transform the Expression - <a target="_blank" href="https://www.spoj.com/problems/ONP/"><b>spoj.com: ONP</b></a></p></li>
    <li><p>Maximum Xor Secondary - <a target="_blank" href="https://codeforces.com/problemset/problem/281/D"><b>codeforces.com: 281/D</b></a></p></li>
    <li><p>Longest Regular Bracket Sequence - <a target="_blank" href="https://codeforces.com/contest/5/problem/C"><b>codeforces.com: contest/5/problem/C</b></a></p></li>
    <li><p>Alternating Current - <a target="_blank" href="https://codeforces.com/contest/343/problem/B"><b>codeforces.com: contest/343/problem/B</b></a></p></li>
    <li><p>Seinfeld - <a target="_blank" href="https://www.spoj.com/problems/ANARC09A/"><b>spoj.com: ANARC09A</b></a></p></li>
    <li><p>Leetcode: Interview Practice - <a target="_blank" href="https://leetcode.com/tag/queue/"><b>Leetcode: Practice Queues</b></a></p></li>
  </ul>
</div>

[**Back To Top 🠉**](#index)

### III(6). Searching Algorithm

Having explored linear data structures, it's time to delve into fundamental and widely used algorithms, starting with searching algorithms.
Searching algorithms aim to locate a specific element in an array, string, linked list, or other data structures. Key searching algorithms include:

<!-- img -->

- **Linear Search:** Iteratively checks for the element from one end to the other.
- **Binary Search:** Divides the data structure into two equal parts to locate the element.
- **Ternary Search:** Divides the array into three parts, determining the segment to search based on partitioning values.

Other notable searching algorithms include:

- Jump Search
- Interpolation Search
- Exponential Search

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <strong>Resources: Searching</strong>
  <ul>
    <li><p>Naive string searching - <a target="_blank" href="http://www.geeksforgeeks.org/searching-for-patterns-set-1-naive-pattern-searching/"><b>geeksforgeeks.org</b></a></p></li>
    <li><p>Detailed Theoretical analysis - <a target="_blank" href="https://www.cs.cmu.edu/~fp/courses/15122-f10/lectures/03-binsearch.pdf"><b>cmu.edu</b></a></p></li>
    <li><p>Binary search - <a target="_blank" href="https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search"><b>khanacademy.org</b></a></p></li>
  </ul>
  <strong>Practice Problems: Searching</strong>
  <ul>
    <li><p>Searching Algorithms - <a target="_blank" href="https://www.geeksforgeeks.org/searching-algorithms/"><b>geeksforgeeks.org</b></a></p></li>
    <li><p>GFG: Binary Search - <a target="_blank" href="http://www.geeksforgeeks.org/binary-search"><b>geeksforgeeks.org</b></a></p></li>
    <li><p>Leetcode: Interview Practice - <a target="_blank" href="https://leetcode.com/tag/binary-search/"><b>Leetcode: Practice Binary-Search</b></a></p></li>
  </ul>
</div>

[**Back To Top 🠉**](#index)

### III(7). Sorting Algorithm

Another crucial algorithm is the sorting algorithm, frequently employed when arranging data based on specific conditions becomes necessary. Sorting algorithms are utilized to rearrange a set of homogeneous data, such as sorting an array in increasing or decreasing order.

These algorithms rearrange the elements of a given array or list according to a comparison operator. The comparison operator determines the new order of elements in the respective data structure.

<!-- img -->

Widely Used Sorting Algorithms

- **Bubble Sort**
- **Selection Sort**
- **Insertion Sort**
- **Quick Sort**
- **Merge Sort**

Numerous other sorting algorithms exist, each beneficial in different scenarios.

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <strong>Resources: Sorting</strong>
  <ul>
    <li><p>Sorting - <a target="_blank" href="https://www.khanacademy.org/computing/computer-science/algorithms/sorting-algorithms/a/sorting"><b>khanacademy.org</b></a></p></li>
    <li><p>BUBBLE SORT - <a target="_blank" href="https://visualgo.net/en/sorting?slide=1"><b>visualgo.net</b></a></p></li>
    <li><p>Merge sort algorithm - <a target="_blank" href="https://www.youtube.com/watch?v=TzeBrDU-JaY"><b>youtube.com</b></a></p></li>
    <li><p>Quick sort algorithm - <a target="_blank" href="https://www.youtube.com/watch?v=COk73cpQbFQ"><b>youtube.com</b></a></p></li>
    <li><p>Counting Sort - <a target="_blank" href="https://www.geeksforgeeks.org/counting-sort/"><b>geeksforgeeks.org</b></a></p></li>
  </ul>
  <strong>Practice Problems: Sorting</strong>
  <ul>
    <li><p>Merge Sort - <a target="_blank" href="https://www.codechef.com/problems/MRGSRT"><b>CodeChef: MRGSRT</b></a></p></li>
    <li><p>Turbo Sort - <a target="_blank" href="https://www.codechef.com/problems/TSORT"><b>CodeChef: TSORT</b></a></p></li>
    <li><p>Merge Sort - <a target="_blank" href="https://www.codechef.com/problems/MRGSRT"><b>CodeChef: MRGSRT</b></a></p></li>
    <li><p>Leetcode: Interview Practice - <a target="_blank" href="https://leetcode.com/tag/sorting/"><b>Leetcode: Practice Sorting</b></a></p></li>
  </ul>
</div>

[**Back To Top 🠉**](#index)

### III(8). Divide and Conquer Algorithm

An intriguing and significant algorithm to learn in your programming journey is the Divide and Conquer algorithm. True to its name, it breaks down a problem into parts, solves each subproblem, and then merges the solutions to address the original problem.

<!-- img -->

The algorithmic paradigm of Divide and Conquer involves three key steps:

1. **Divide:** Break the given problem into subproblems of the same type.
2. **Conquer:** Recursively solve these subproblems.
3. **Combine:** Appropriately combine the answers.

This technique is prominently featured in two sorting algorithms—Merge Sort and Quick Sort.

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
   <strong>Resources: Divide and Conquer</strong>
   <ul>
      <li><p>Divide-and-Conquer and Recurrences - <a target="_blank" href="https://www.cs.cmu.edu/afs/cs/academic/class/15210-s12/www/lectures/lecture02.pdf/"><b>cs.cmu.edu</b></a></p></li>
      <li><p>Divide and Conquer - <a target="_blank" href="https://www.geeksforgeeks.org/category/divide-and-conquer/"><b>geeksforgeeks.org</b></a></p></li>
   </ul>
 <strong>Practice Problems: Divide and Conquer</strong>
 <ul>
    <li><p>Merge Sort - <a target="_blank" href="https://www.codechef.com/problems/MRGSRT"><b>codechef.com: MRGSRT</b></a></p></li>
    <li><p>Tasty Dishes - <a target="_blank" href="https://www.codechef.com/problems/TASTYD"><b>codechef.com: TASTYD</b></a></p></li>
    <li><p>Restore the Permutation - <a target="_blank" href="https://www.codechef.com/problems/RESTPERM"><b>codechef.com: RESTPERM</b></a></p></li>
    <li><p>A Magical Length - <a target="_blank" href="https://www.codechef.com/problems/ACM14KP1"><b>codechef.com: ACM14KP1</b></a></p></li>
    <li><p>Largest Rectangle in a Histogram - <a target="_blank" href="https://www.spoj.com/problems/HISTOGRA/"><b>spoj.com: HISTOGRA</b></a></p></li>
    <li><p>Compilers and parsers - <a target="_blank" href="https://www.codechef.com/problems/COMPILER"><b>CodeChefL COMPILER</b></a></p></li>
    <li><p>Leetcode: Practice  - <a target="_blank" href="https://leetcode.com/tag/divide-and-conquer/"><b>Divide and Conquer</b></a></p></li>
 </ul>
</div>

[**Back To Top 🠉**](#index)

### III(9). Linked List

Similar to the aforementioned data structures, a linked list is a linear data structure. However, unlike an array, a linked list doesn't have contiguous memory allocation. Instead, each node in the linked list is assigned to a random memory space, and the previous node maintains a pointer to this node. Direct memory access to any node is not possible, and the linked list is dynamic, allowing for size adjustments at any time.

<!-- img -->

Linked List Variations to Explore

- **Singly Linked List:** Each node points only to its next node.
- **Circular Linked List:** The last node points back to the head of the linked list.
- **Doubly Linked List:** Each node holds two pointers—one pointing to the next node and the other to the previous node.

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <strong>Resources: Linked List</strong>
  <ul>
      <li><p>Linked List Data Structure - <a target="_blank" href="https://www.geeksforgeeks.org/data-structures/linked-list/"><b>geeksforgeeks.org</b></a></p></li>
  </ul>
  <strong>Practice Problems: Linked List</strong>
  <ul>
      <li><p>Leetcode: Interview Practice - <a target="_blank" href="https://leetcode.com/tag/linked-list/"><b>Leetcode: Practice Linked List</b></a></p></li>
  </ul>
</div>

[**Back To Top 🠉**](#index)

### III(10). Tree Data Structure

Having covered the basics of linear data structures, let's delve into non-linear structures, starting with the Tree.

The Tree data structure resembles an inverted tree from nature, featuring a root and leaves. The root is the initial node, and the leaves are at the bottom-most level. Notably, there's only one path between any two nodes in a tree.

<!-- img -->

Based on the maximum number of children a node can have:

- **Binary Tree:** Each node can have a maximum of 2 children.
- **Ternary Tree:** Each node can have a maximum of 3 children.
- **N-ary Tree:** A node can have at most N children.

Additional classifications based on node configuration include:

- **Complete Binary Tree:** All levels are filled, except possibly for the last level, which is filled from the left as much as possible.
- **Perfect Binary Tree:** All levels are filled.
- **Binary Search Tree:** A special binary tree where smaller nodes are on the left, and higher value nodes are on the right.
- **Ternary Search Tree:** Similar to a binary search tree, but with nodes having at most 3 children.

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <strong>Resources: Trees</strong>
  <ul>
    <li><p>Tree Data Structure - <a target="_blank" href="https://www.geeksforgeeks.org/tree-data-structure/"><b>geeksforgeeks.org</b></a></p></li>
    <li><p>Heaps (priority queue) - <a target="_blank" href="https://www.geeksforgeeks.org/binary-heap/"><b>viterbi-web.usc.edu</b></a></p></li>
    <li><p>Heaps - <a target="_blank" href="https://visualgo.net/en/heap?slide=1"><b>visualgo.net</b></a></p></li>
    <li><p>Priority Queues: Lecture Notes - <a target="_blank" href="https://www.cs.cmu.edu/~wlovas/15122-r11/lectures/15-priorqs.pdf"><b>cs.cmu.edu</b></a></p></li>
    <li><p>UNION-FIND DISJOINT SETS (UFDS) - <a target="_blank" href="https://visualgo.net/en/ufds"><b>visualgo.net</b></a></p></li>
    <li><p>DISJOINT-SET DATA STRUCTURES - <a target="_blank" href="https://www.topcoder.com/thrive/articles/Disjoint-set%20Data%20Structures"><b>topcoder.com</b></a></p></li>
    <li><p>Disjoint set (Union-Find): Lecture Notes - <a target="_blank" href="https://people.cs.georgetown.edu/jthaler/ANLY550/lec6.pdf"><b>harvard.edu</b></a></p></li>
    <li><p>Segment Trees: MIN SEGMENT TREE - <a target="_blank" href="https://visualgo.net/en/segmenttree?slide=1"><b>visualgo.net</b></a></p></li>
    <li><p>RANGE MINIMUM QUERY AND LOWEST COMMON ANCESTOR - <a target="_blank" href="https://www.topcoder.com/thrive/articles/Range%20Minimum%20Query%20and%20Lowest%20Common%20Ancestor"><b>topcoder.com</b></a></p></li>
    <li><p>Segment Trees - <a target="_blank" href="https://www.iarcs.org.in/inoi/online-study-material/topics/segment-tree.php"><b>iarcs.org.in</b></a></p></li>
    <li><p>BINARY INDEXED TREES: TopCoder - <a target="_blank" href="https://www.topcoder.com/thrive/articles/Binary%20Indexed%20Trees"><b>topcoder.com</b></a></p></li>
    <li><p>Binary Index Tree (Fenwick tree) - <a target="_blank" href="https://visualgo.net/en/fenwicktree?slide=1"><b>visualgo.net</b></a></p></li>
    <li><p>Binary Index Tree: ICO - <a target="_blank" href="https://www.iarcs.org.in/inoi/online-study-material/topics/binary-index-tree.php"><b>iarcs.org.in</b></a></p></li>
    <li><p>Trees (traversals) - <a target="_blank" href="https://people.eecs.berkeley.edu/~vazirani/s99cs170/notes/dynamic2.pdf"><b>berkeley.edu</b></a></p></li>
    <li><p>Dynamic programming on trees - <a target="_blank" href="https://www.iarcs.org.in/inoi/online-study-material/topics/dp-trees.php"><b>iarcs.org.in</b></a></p></li>
  </ul>
  <strong>Practice Problems: Trees</strong>
  <ul>
      <li><a target="_blank" href="https://leetcode.com/tag/tree/"><b>Leetcode: Practice Trees</b></a></li>
      <li><a target="_blank" href="https://leetcode.com/tag/heap-priority-queue/"><b>Leetcode: Practice Heap (Priority Queue)</b></a></li>
      <li><a target="_blank" href="https://leetcode.com/tag/union-find/"><b>Leetcode: Practice Segment Tree</b></a></li>
      <li><a target="_blank" href="https://leetcode.com/tag/segment-tree/"><b>Leetcode: Practice Union Find</b></a></li>
      <li><a target="_blank" href="https://leetcode.com/tag/binary-indexed-tree/"><b>Leetcode: Practice Binary Indexed Tree</b></a></li>
      <li><a target="_blank" href="https://leetcode.com/tag/depth-first-search/"><b>Leetcode: Practice Depth-First Search</b></a></li>
      <li><a target="_blank" href="https://leetcode.com/tag/breadth-first-search/"><b>Leetcode: Practice Breadth-First Search</b></a></li>
      <li><a target="_blank" href="https://leetcode.com/tag/binary-search-tree/"><b>Leetcode: Practice Binary Search Tree</b></a></li>
      <li><a target="_blank" href="https://leetcode.com/tag/trie/"><b>Leetcode: Practice Trie</b></a></li>
  </ul>
</div>

[**Back To Top 🠉**](#index)

### III(11). Graph Data Structure

Moving on to another crucial non-linear structure, let's explore the Graph. Unlike the Tree, a Graph lacks a specific root or leaf node and allows traversal in any order.

A Graph is a non-linear structure composed of a finite set of vertices (or nodes) and a set of edges connecting pairs of nodes. It proves invaluable in solving various real-life problems. Graphs can take different forms based on edge orientation and node characteristics.

<!-- img -->

Key concepts to explore:

- **Types of Graphs:** Varying types based on connectivity or weights of nodes.
- **Introduction to BFS and DFS:** Algorithms for traversing through a graph.
- **Cycles in a Graph:** Series of connections leading to a loop.
- **Topological Sorting in the Graph**
- **Minimum Spanning Tree in Graph**

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <strong>Resources: Graphs</strong>
  <ul>
    <li><p>Graph Data Structure And Algorithms - <a target="_blank" href="https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/"><b>geeksforgeeks.org</b></a></p></li>
    <li><p>Depth First Search or DFS for a Graph - <a target="_blank" href="https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/"><b>geeksforgeeks.org</b></a></p></li>
    <li><p>GRAPH TRAVERSAL (DFS/BFS) - <a target="_blank" href="https://visualgo.net/en/dfsbfs"><b>visualgo.net</b></a></p></li>
    <li><p>Dijkstra’s shortest path algorithm - <a target="_blank" href="http://www.geeksforgeeks.org/greedy-algorithms-set-6-dijkstras-shortest-path-algorithm/"><b>geeksforgeeks.org</b></a></p></li>
    <li><p>SINGLE-SOURCE SHORTEST PATHS - <a target="_blank" href="https://visualgo.net/en/sssp"><b>visualgo.net</b></a></p></li>
    <li><p>Bellman Ford Algorithm - <a target="_blank" href="http://www.geeksforgeeks.org/dynamic-programming-set-23-bellman-ford-algorithm/"><b>geeksforgeeks.org</b></a></p></li>
    <li><p>One Source Shortest Path - <a target="_blank" href="https://compprog.wordpress.com/2007/11/29/one-source-shortest-path-the-bellman-ford-algorithm/"><b>compprog.wordpress.com</b></a></p></li>
    <li><p>Minimum spanning tree - <a target="_blank" href="https://www.cs.princeton.edu/courses/archive/fall19/cos226/lectures/43MinimumSpanningTrees.pdf"><b>cs.princeton.edu</b></a></p></li>
    <li><p>Articulation points - <a target="_blank" href="https://www.iarcs.org.in/inoi/online-study-material/topics/articulation-points.php"><b>iarcs.org.in</b></a></p></li>
    <li><p>Strongly connected components - <a target="_blank" href="https://www.iarcs.org.in/inoi/online-study-material/topics/scc.php"><b>iarcs.org.in</b></a></p></li>
    <li><p>Topological Sorting - <a target="_blank" href="https://www.geeksforgeeks.org/topological-sorting/"><b>geeksforgeeks.org</b></a></p></li>
    <li><p>Euler Paths and Euler Circuits - <a target="_blank" href="https://jlmartin.ku.edu/~jlmartin/courses/math105-F11/Lectures/chapter5-part2.pdf"><b>jlmartin.ku.edu</b></a></p></li>
    <li><p>Fast Modulo Multiplication - <a target="_blank" href="https://discuss.codechef.com/t/a-tutorial-on-fast-modulo-multiplication-exponential-squaring/2899"><b>codechef.com</b></a></p></li>
    <li><p>Algos for Calculating nCr % M - <a target="_blank" href="https://discuss.codechef.com/t/best-known-algos-for-calculating-ncr-m/896"><b>codechef.com</b></a></p></li>
  </ul>
  <strong>Practice Problems: Graphs</strong>
  <ul>
      <li><p>Two Closest - <a target="_blank" href="https://www.codechef.com/problems/PAIRCLST"><b>codechef.com: PAIRCLST</b></a></p></li>
      <li><p>Special Shortest Walk - <a target="_blank" href="https://www.codechef.com/problems/SPSHORT"><b>codechef.com: SPSHORT</b></a></p></li>
      <li><p>Robot Control - <a target="_blank" href="https://codeforces.com/problemset/problem/346/D"><b>codeforces.com: 346/D</b></a></p></li>
      <li><p>Arbitrage - <a target="_blank" href="https://www.spoj.com/problems/ARBITRAG/"><b>spoj.com: ARBITRAG</b></a></p></li>
      <li><p>Cost - <a target="_blank" href="https://www.spoj.com/problems/HIGHWAYS/"><b>spoj.com: HIGHWAYS</b></a></p></li>
      <li><p>Police Query - <a target="_blank" href="https://www.spoj.com/problems/POLQUERY/"><b>spoj.com: POLQUERY</b></a></p></li>
      <li><p>Visiting Friends - <a target="_blank" href="https://www.spoj.com/problems/MCO16405/"><b>codechef.com: MCO16405</b></a></p></li>
      <li><p>Chef and Roads - <a target="_blank" href="https://www.codechef.com/problems/CL16BF/"><b>codechef.com: CL16BF</b></a></p></li>
      <li><p>Codechef Password Recovery - <a target="_blank" href="https://www.codechef.com/problems/CHEFPASS/"><b>codechef.com: CHEFPASS</b></a></p></li>
      <li><p>Tanya and Password - <a target="_blank" href="https://codeforces.com/contest/508/problem/D"><b>codeforces.com: contest/508/problem/D</b></a></p></li>
      <li><p>One-Way Reform - <a target="_blank" href="https://codeforces.com/contest/723/problem/E"><b>codeforces.com: contest/723/problem/E</b></a></p></li>
      <li><p>Problem Statement for NetworkSecurity - <a target="_blank" href="https://community.topcoder.com/stat?c=problem_statement&pm=10736"><b>topcoder.com</b></a></p></li>
      <li><p>Leetcode: Interview Practice - <a target="_blank" href="https://leetcode.com/tag/graph/"><b>Leetcode: Practice Graphs</b></a></p></li>
  </ul>
</div>

[**Back To Top 🠉**](#index)

### III(12). Recursion

Recursion stands out as a vital algorithm leveraging the concept of code reusability and repeated code usage. Its significance extends to being the foundation for many other algorithms, including:

<!-- img -->

- Tree Traversals
- Graph Traversals
- Divide and Conquer Algorithms
- Backtracking Algorithms

To explore Recursion thoroughly, refer to the following articles/links:

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <strong>Resources: Recursion</strong>
  <ul>
    <li><p>AN INTRODUCTION TO RECURSION PART ONE - <a target="_blank" href="https://www.topcoder.com/thrive/articles/An%20Introduction%20to%20Recursion%20Part%20One"><b>topcoder.com</b></a></p></li>
    <li><p>AN INTRODUCTION TO RECURSION PART TWO - <a target="_blank" href="https://www.topcoder.com/thrive/articles/An%20Introduction%20to%20Recursion%20Part%20Two"><b>topcoder.com</b></a></p></li>
    <li><p>Introduction to Recursion - <a target="_blank" href="https://www.geeksforgeeks.org/introduction-to-recursion-data-structure-and-algorithm-tutorials/"><b>geeksforgeeks.org</b></a></p></li>
    <li><p>Backtracking, Memoization & Dynamic Programming! - <a target="_blank" href="https://loveforprogramming.quora.com/Backtracking-Memoization-Dynamic-Programming"><b>loveforprogramming.quora.com</b></a></p></li>
    <li><p>Recursion Interview Questions & Tips - <a target="_blank" href="https://interviewing.io/recursion-interview-questions"><b>interviewing.io</b></a></p></li>
  </ul>
</div>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <strong>Practice Problems: Recursion</strong>
  <ul>
    <li><p>Connecting Soldiers - <a target="_blank" href="https://www.codechef.com/problems/NOKIA"><b>codechef.com: NOKIA</b></a></p></li>
    <li><p>Fit Squares in Triangle - <a target="_blank" href="https://www.codechef.com/problems/TRISQ"><b>codechef.com: TRISQ</b></a></p></li>
    <li><p>Leetcode: Interview Practice - <a target="_blank" href="https://leetcode.com/tag/recursion/"><b>Leetcode: Practice Recursion</b></a></p></li>
  </ul>
</div>

### III(13). Backtracking Algorithm

Derived from Recursion, the Backtracking algorithm allows for retracing if a recursive solution fails, exploring alternative solutions. It systematically tries out all possible solutions to find the correct one.

Backtracking is an algorithmic technique that incrementally builds a solution, removing failed solutions that don't meet problem constraints.

<!-- img -->

Key problems to tackle in Backtracking algorithms:

- **Knight’s Tour Problem**
- **Rat in a Maze**
- **N-Queen Problem**
- **Subset Sum Problem**
- **M-Coloring Problem**
- **Hamiltonian Cycle**
- **Sudoku**

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <strong>Resources: Backtracking</strong>
  <ul>
    <li><p>Backtracking Algorithms - <a target="_blank" href="https://www.geeksforgeeks.org/backtracking-algorithms/"><b>geeksforgeeks.org</b></a></p></li>
    <li><p>Recursion and Backtracking - <a target="_blank" href="https://codeforces.com/blog/entry/118843"><b>codeforces.com</b></a></p></li>
    <li><p>Backtracking:the essential part of dynamic programming - <a target="_blank" href="https://codeforces.com/blog/entry/102888"><b>codeforces.com</b></a></p></li>
    <li><p>Backtracking, Memoization & Dynamic Programming! - <a target="_blank" href="https://loveforprogramming.quora.com/Backtracking-Memoization-Dynamic-Programming"><b>loveforprogramming.quora.com</b></a></p></li>
    <li><p>Backtracking Archives - <a target="_blank" href="https://www.geeksforgeeks.org/category/dsa/algorithm/backtracking/"><b>geeksforgeeks.org</b></a></p></li>
  </ul>
</div>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <strong>Practice Problems: Backtracking</strong>
  <ul>
    <li><p>Leetcode: Interview Practice - <a target="_blank" href="https://leetcode.com/tag/backtracking/"><b>Leetcode: Practice Backtracking</b></a></p></li>
  </ul>
</div>

[**Back To Top 🠉**](#index)

### III(14). Dynamic Programming

Dynamic Programming stands as a crucial algorithm, serving as an optimization over plain recursion. It becomes particularly valuable when a recursive solution involves repeated calls for the same inputs, allowing for optimization.

<!-- img -->

<div class="box box-blue ">

  > Those who cannot remember the past are condemned to repeat it.
  <div align="right" class="p-4">- <i>Dynamic Programming</i></div>
</div>


Key concepts to explore in Dynamic Programming:

- **Tabulation vs Memoization**
- **Optimal Substructure Property**
- **Overlapping Subproblems Property**
- **Bitmasking and Dynamic Programming**
- **Bitmasking and Dynamic Programming**
- **Digit DP**

#### Basic DP

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <strong>Resources: Basic Dynamic Programming</strong>
  <ul>
    <li><p>Demystifying Dynamic Programming - <a target="_blank" href="https://www.freecodecamp.org/news/demystifying-dynamic-programming-3efafb8d4296"><b>freecodecamp.org</b></a></p></li>
    <li><p>DP Tutorial and Problem List - <a target="_blank" href="https://codeforces.com/blog/entry/67679"><b>codeforces.com</b></a></p></li>
    <li><p>DYNAMIC PROGRAMMING: FROM NOVICE TO ADVANCED - <a target="_blank" href="https://www.topcoder.com/thrive/articles/Dynamic%20Programming:%20From%20Novice%20to%20Advanced"><b>topcoder.com</b></a></p></li>
    <li><p>Dynamic Programming - <a target="_blank" href="https://www.geeksforgeeks.org/dynamic-programming/"><b>geeksforgeeks.org</b></a></p></li>
    <li><p>Backtracking, Memoization & Dynamic Programming! - <a target="_blank" href="https://loveforprogramming.quora.com/Backtracking-Memoization-Dynamic-Programming"><b>loveforprogramming.quora.com</b></a></p></li>
  </ul>
</div>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <strong>Practice Problems: Basic Dynamic Programming</strong>
  <ul>
    <li><p>Alternating subarray prefix - <a target="_blank" href="https://www.codechef.com/problems/ALTARAY"><b>codechef.com: ALTARAY</b></a></p></li>
    <li><p>Subtraction Game 2 - <a target="_blank" href="https://www.codechef.com/problems/AMSGAME2"><b>codechef.com: AMSGAME2</b></a></p></li>
    <li><p>Striver DP Series - <a target="_blank" href="https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/"><b>takeuforward.org</b></a></p></li>
    <li><p>Leetcode: Interview Practice - <a target="_blank" href="https://leetcode.com/tag/dynamic-programming/"><b>Leetcode: Practice Dynamic Programming</b></a></p></li>
  </ul>
</div>

#### Advanced DP

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <strong>Resources: Adv Dynamic Programming</strong>
  <ul>
    <li><p>Dynamic Programming over Subsets and Paths - <a target="_blank" href="https://codeforces.com/blog/entry/337"><b>codeforces.org</b></a></p></li>
  </ul>
</div>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <strong>Practice Problems: Adv Dynamic Programming</strong>
  <ul>
    <li><p>Histogram - <a target="_blank" href="https://www.spoj.com/problems/HIST2/"><b>spoj.com: HIST2</b></a></p></li>
    <li><p>Lazy Cows - <a target="_blank" href="https://www.spoj.com/problems/LAZYCOWS/"><b>spoj.com: LAZYCOWS</b></a></p></li>
    <li><p>Traveling by Stagecoach - <a target="_blank" href="https://www.spoj.com/problems/TRSTAGE/"><b>spoj.com: TRSTAGE</b></a></p></li>
    <li><p>Rent your airplane and make money - <a target="_blank" href="https://www.spoj.com/problems/RENT/"><b>spoj.com: RENT</b></a></p></li>
    <li><p>Increasing Subsequences - <a target="_blank" href="https://www.spoj.com/problems/INCSEQ/"><b>spoj.com: INCSEQ</b></a></p></li>
    <li><p>Distinct Increasing Subsequences - <a target="_blank" href="https://www.spoj.com/problems/INCDSEQ/"><b>spoj.com: INCDSEQ</b></a></p></li>
    <li><p>Dynamic Programming Type - <a target="_blank" href="https://codeforces.com/blog/entry/325"><b>codechef.com: problem list</b></a></p></li>
    <li><p>Striver DP Series - <a target="_blank" href="https://takeuforward.org/dynamic-programming/striver-dp-series-dynamic-programming-problems/"><b>takeuforward.org</b></a></p></li>
    <li><p>Leetcode: Interview Practice - <a target="_blank" href="https://leetcode.com/tag/dynamic-programming/"><b>Leetcode: Practice Dynamic Programming</b></a></p></li>
  </ul>
</div>

[**Back To Top 🠉**](#index)

### III(15). Greedy Methodology

As the name implies, the Greedy methodology constructs the solution incrementally, selecting the next piece that provides the most immediate benefit — the locally optimal choice leading to global solutions.

Well-suited for problems where choosing locally optimal options also results in global optimality. For instance, the Fractional Knapsack Problem employs a local optimal strategy of choosing items with the maximum value-to-weight ratio, leading to a globally optimal solution as fractions are allowed.

<!-- img -->

To delve into the Greedy algorithm, explore these sub-topics:

- **Standard Greedy Algorithms**
- **Greedy Algorithms in Graphs**
- **Greedy Algorithms in Operating Systems**
- **Greedy Algorithms in Arrays**
- **Approximate Greedy Algorithms for NP-complete Problems**

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <strong>Resources: Greedy</strong>
  <ul>
    <li><p>Greedy Algorithms - <a target="_blank" href="https://www.geeksforgeeks.org/greedy-algorithms/"><b>geeksforgeeks.org</b></a></p></li>
    <li><p>Greedy Algorithms - <a target="_blank" href="https://www.iarcs.org.in/inoi/online-study-material/topics/greedy.php"><b>iarcs.org.in</b></a></p></li>
    <li><p>GREEDY IS GOOD - <a target="_blank" href="https://www.topcoder.com/thrive/articles/Greedy%20is%20Good"><b>topcoder.com</b></a></p></li>
    <li><p>GREEDY IS GOOD - <a target="_blank" href="https://jeffe.cs.illinois.edu/teaching/algorithms/book/04-greedy.pdf"><b>jeffe.cs.illinois.edu</b></a></p></li>
  </ul>
</div>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <strong>Practice Problems: Greedy</strong>
  <ul>
    <li><p>Biased Standings - <a target="_blank" href="https://www.spoj.com/problems/BAISED/"><b>spoj.com: BAISED</b></a></p></li>
    <li><p>Load Balancing - <a target="_blank" href="https://www.spoj.com/problems/BALIFE/"><b>spoj.com: BALIFE</b></a></p></li>
    <li><p>Many Chefs - <a target="_blank" href="https://www.codechef.com/problems/MANYCHEF"><b>codechef.com: MANYCHEF</b></a></p></li>
    <li><p>Leetcode: Interview Practice - <a target="_blank" href="https://leetcode.com/tag/greedy/"><b>Leetcode: Practice Greedy</b></a></p></li>
  </ul>
</div>

[**Back To Top 🠉**](#index)

### III(16). Mathematics Advanced

#### Advance Mathematics in DSA

- Fundamental for evaluating algorithm effectiveness.
- Essential for problems with mathematical characteristics.
- Crucial for mastering Data Structures and Algorithms.

> Mathematical algorithm can be defined as an algorithm or procedure which is utilized to solve a mathematical problem, or mathematical problem which can be solved using DSA.
<!-- > </br> <div align="right">- <i>Dynamic Programming</i><div> -->

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <strong>Resources: Mathematics</strong>
  <ul>
    <li><p>Mathematical Algorithms for DSA - <a href="https://www.geeksforgeeks.org/mathematical-algorithms/" class="text-blue-500 no-underline"><b>geeksforgeeks.org</b></a></p></li>
    <li><p>Mathematical Blogs on DSA - <a href="https://codeforces.com/blog/entry/91363" class="text-blue-500 no-underline"><b>codeforces.com</b></a></p></li>
  </ul>
</div>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <strong>Practice Problems: Mathematics</strong>
  <ul>
    <li><p>Leetcode: Interview Practice - <a href="https://leetcode.com/tag/math/" class="text-blue-500 no-underline"><b>Leetcode Practice: Math</b></a></p></li>
  </ul>
</div>

[**Back To Top 🠉**](#index)

### IV. Practice Consistently and Extensively

Having covered the basics of major data structures and algorithms, it's time to put your knowledge into practice.


<div class="box box-blue ">

  > Practice makes a man perfect.
</div>

For learning DSA, consistent and extensive practice is key. Whether considered a separate step or an integral part of the learning process, dedicating time to solving problems and implementing algorithms is essential for mastery.

### V. Compete to Advance and Become Proficient

Explore and enhance your coding skills on various practicing platforms. Compete, solve challenges, and advance your proficiency on platforms like:

1. [**LeetCode**](https://leetcode.com/)
2. [**Codeforces**](https://codeforces.com/)
3. [**HackerRank**](https://www.hackerrank.com/)
4. [**CodeChef**](https://www.codechef.com/)
5. [**TopCoder**](https://www.topcoder.com/)
6. [**AtCoder**](https://atcoder.jp/)
7. [**GeeksforGeeks**](https://www.geeksforgeeks.org/)
8. [**InterviewBit**](https://www.interviewbit.com/)
9. [**Exercism**](https://exercism.io/)
10. [**Project Euler**](https://projecteuler.net/)

Competing on these platforms will help you apply your knowledge, face diverse challenges, and continuously improve your problem-solving skills.

## Tips to Boost Your Learning

Throughout the roadmap to learn DSA, consider the following tips to enhance your learning experience:

1. **Master the Fundamentals:** Thoroughly understand the fundamentals of your chosen programming language, including basic syntax, data types, operators, variables, functions, conditional statements, loops, and Object-Oriented Programming (OOP).
2. **Implement Concepts Practically:** Implement each small concept actively. Practice coding to reinforce your understanding of basic programming constructs.
3. **Grasp Complexity Analysis:** Learn how to analyze the complexity of algorithms. Solve multiple questions to practice calculating complexities. Utilize quizzes on Algorithm Analysis for additional practice.
4. **Focus on Logic Building:** Strengthen your logical thinking by solving problems from scratch without referring to solutions or editorials. The more problems you solve independently, the more robust your logic-building skills become.
5. **Overcome Challenges:** Accept that challenges and roadblocks are part of the learning journey. If you're stuck on a problem or topic, read hints and approaches, and try to solve it independently. If needed, refer to the logic and code it yourself. If facing repeated challenges, consider revisiting the related concepts.

Remember, learning DSA is a continuous process, and persistence and problem-solving skills play crucial roles in your success.

## DSA Practice Sheets

##### 1. Striver’s SDE Sheet — Top Coding Interview Problems

- [Striver: Website Link](https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/)
- Creator: Raj Vikramaditya (Striver)
- A compilation of essential coding interview questions in Data Structures & Algorithms. Commonly asked in interviews at prominent companies like Google, Amazon, and Facebook.

##### 2. DSA Sheet by Love Babbar

- [Love Babbar: Website Link](https://www.geeksforgeeks.org/dsa-sheet-by-love-babbar/)
- Creator: Love Babbar
- A comprehensive list of 450 coding questions by a former Amazon Software Engineer. These questions help in understanding Data Structures & Algorithms and are frequently asked in interviews at companies like Amazon, Microsoft, and Google.

##### 3. Apna College DSA Sheet

- [Apna College: Google Sheet Link](https://docs.google.com/spreadsheets/d/1hXserPuxVoWMG9Hs7y8wVdRCJTcj3xMBAEYUOXQ5Xag)
- Creators: Shradha Didi and Aman Bhaiya
- A valuable resource with around 400 problems categorized by topic, along with information about companies that have posed these problems.

##### 4. NeetCode 150

- [NeetCode: Website Link](https://neetcode.io/practice)
- Curated by a Google engineer
- A collection of 150 LeetCode.com questions covering important topics for interviews at FAANG and other big tech companies.

##### 5. DSA Sheet by Arsh 60 Days Plan

- [Arsh: Google Sheet Link](https://docs.google.com/spreadsheets/d/1MGVBJ8HkRbCnU6EQASjJKCqQE8BWng4qgL0n3vCVOxE)
- Creator: Arsh Goyal
- A DSA plan with coding problems designed to prepare for interviews in 45–60 days. Arsh has a background in Samsung, CodeChef, and ISRO.

##### 6. AlgoPrep’s 151 Problems Sheet

- [AlgoPrep: Google Sheet Link](https://docs.google.com/spreadsheets/d/1kyHfGGaLTzWspcqMUUS5Httmip7t8LJB0P-uPrRLGos)
- Compiled by Nishant Bhaiya from AlgoPrep
- A broad range of coding problems and solutions related to data structures and algorithms, aimed at assisting software development engineers in interview preparation for top tech firms.

[**Back To Top 🠉**](#index)
