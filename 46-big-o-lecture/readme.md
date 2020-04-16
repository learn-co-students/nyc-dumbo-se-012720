# **Computer Science Series: Big O Notation**

## SWBATs
- [ ] Define 'algorithm'
- [ ] Encounter Big O terminology and not feel intimidated
- [ ] Identify code that runs in linear, logarithmic, quadratic time
- [ ] Understand that Ruby hashes & Javascript objects have constant time look-ups
- [ ] Understand time / space tradeoffs in interview questions

## Discussion Question
Prior to the lecture, students should complete this problem as a Discussion Question:

Write a function called
`hasTargetSum` that receives two arguments:
  * an array of integers
  * a target integer

The function should return all pairs of numbers found in the array that add to the target number.

```js
// Example 1:
hasTargetSum([-1, 3, 8, 12, 4, 11, 7], 10)
// should return
// [[-1, 11], [3, 7]]

// it is fine if you return repeats
// ex:
// [[-1, 11], [3, 7], [11, -1], [7, 3]]


// Example 2:
hasTargetSum([22, 19, 4, 6, 30, -6], 25)
// returns
// [[19, 6]]
// or [[19, 6], [6, 19]]
```


# **Defining Big O**
Big O is a pretty intuitive concept! Some of the terminology and jargon might be a little intimidating, but you'll be a master by the end of this lecture.

![Master of Big O](https://media.giphy.com/media/dRk2vIzh5v0NG/200w_d.gif)

**Big O is a way to compare algorithms to each other.** It doesn't make sense to compare, for example, the number of seconds that some algorithm takes to complete. The algorithm will take a vastly different amount of physical time to run on IBM's Watson (a super computer) as compared to your MacBook as compared to your grandma's PC from 2004. The runtime will also  be different given the size of the input. So developers need some way to describe algorithms' efficiency in relation to each other in an abstract and high-level way.

Why is this important? As programmers, we will balance the  **_efficiency_** of an algorithm against the amount of **_space in memory_** that an algorithm requires.

**WE 👏 GET 👏 TO 👏 MAKE 👏 THIS 👏 DECISION.**

The answer will vary depending on what we're prioritizing for the end user.

If a user wants to look up a specific friend on a social media site, does it make sense to iterate through every user before returning the matching user(s)? Or is there possibly a more efficient way to query the database and return the requested data for a better user experience?

*In this example, we are likely going to prioritize the amount of time that it takes your application to return and render the user(s) from the database, as opposed to using the least amount of memory.*


# **WTF is an Algorithm??**
An **algorithm** is simply a procedure, or set of instructions.

![How to Grill a Steak](https://media.giphy.com/media/CpOhT5rJG1xdu/giphy.gif)

### Let's Break it Down

In the real world, you utilize algorithms all the time! If you had to describe how you wash your hair, you would likely outline the following instructions:

```
lather
rinse
repeat
```

That's not *really* the full algorithm because that's an infinite loop. The full procedure could more accurately be expressed as:

```
while (hair != clean) {
  lather()
  rinse()
}
```

Another example of an algorithm that you might use all the time are recipes! If you want to make some delicious chocolate chip cookies, you'd want complete the following steps:

```
1. Preheat the oven to 350 F.
2. Microwave the butter for about 40 seconds.
Butter should be completely melted but shouldn't be hot.
3. In a large bowl, mix butter with the sugars
until well-combined.
4. Stir in vanilla and egg until incorporated.
5. Add the flour, baking soda, and salt.  
6. Mix dough until just combined.
Dough should be soft and a little sticky but not overly sticky.
7. Stir in chocolate chips.
8. Scoop out 1.5 tablespoons of dough and place on baking sheet.
9. Bake for 7-10 minutes, or until cookies are set.
They will be puffy and still look a little underbaked
in the middle.
```

Any set of instructions or a defined procedure on how to complete a task could also be categorized as an algorithm.

![Chocolate Chip Cookies Baking](https://media.giphy.com/media/IFHs8yM3SKuJi/giphy-downsized.gif)

# **Linear Time**

As our first foray into Big O, let's examine how the `.find` method works under the hood.

```ruby
arr = (1..10).to_a

arr.find do |n|
  n == 3
end
```

* `.find` is an enumerable method so we start iterating.
* The first element, `1` is yielded to the block.
* The block variable `n` is now bound to the value `1`.
* Did we meet the condition: is `1` equal to `3`?
* Nope, okay, let's consider the next element in the array.
* Now `2` is yielded to the block, `n` is now bound to the value `2`.
* Is `2` equal to `3`? No.
* The next element of the array is yielded to the block and `n` is bound to the value `3`.
* Is `3 == 3`? YES!
* Okay, great, stop iterating and return the found element.

What happens if the number the method was trying to find is `7`?

What if it was `1`?

In an array of `n` elements, the worst case scenario is that the algorithm needs to make `n` iterations.

When we consider the worst case scenario, an enumerable must iterate through every element in the array and either return that element, or fail to find an element that fulfills the condition. Whether it might find the element on the first try, or on the third try, or sometimes not at all is not important; in regards to Big O, developers simply care about describing the process from the highest, most abstract level.

If you were to chart the `.find` method on a graph where the x-axis represents the number of elements and the y-axis represents the units of work that your computer has to do, it would follow the green line on the graph below.

![Big O Graph](public/big_o_graph.png)

### This is called **Big O of N** or **`O(n)`** and also **linear time**.

Why "linear time?" **_As the size of the input grows, the algorithm will take more time directly linearly proportionally._** Therefore, the algorithm creates a perfectly straight line on the graph.

One more time for the people in the back: **_it grows proportionally along both axes simultaneously._**

For an array with four elements (four points to the left on the x-axis), it could require up to four units of work (four points up on the y-axis). For an array with one hundred elements, it could take up to one hundred elements of work, and the coordinates would be (100, 100). For an array of `n` elements, it could take up to `n` elements of work to iterate through the array.

That's it! That's the first runtime of Big O!

![Cheering Minions](https://media.giphy.com/media/11sBLVxNs7v6WA/giphy-downsized.gif)


## Constant Factors
### REMEMBER: in Big O, focus **_only_** a high level summary

Let's consider the following methods. They will
take the average of an array of numbers and then return `true` or `false` if the array contains the average number:

```ruby
def average(arr)
  # .reduce takes in an argument
  # this argument sets the initial value of the sum
  # then it iterates through every element in the array
  # and adds that number to the sum
  # then returns the sum
  arr.reduce(0){|sum, num| sum + num } / arr.size.to_f
end

def contains_avg?(arr)
  avg = average(arr)
  arr.includes { |n| n == avg }
end

a = [2,3,4,5,6]
b = [2,3,4,5,100]

avg(a)
# => returns `true`
avg(b)
# => returns `false`
```

If we consider what the Big O of `contains_avg?`, it first calls `average`, which uses `.reduce`. This will iterate through the entire array, and then do one more unit of work to divide the summed array against the size of the array. The Big O of `average` would be `O(n + 1)`

So once `contains_avg?` has the average of the array, it also iterates through every element in the original array to compare it to the returned value of `average`. So the Big O of `.includes` is `O(n)`.

So you might think that Big O of the entire operation is `O(2n + 1)`...

#### BUT NO!

![Confused Puppos](https://media.giphy.com/media/7L7hN0lga40lG/giphy-downsized.gif)

#### Big O is simply the 👉 highest 👈 level summary of the algorithm.

Big O of `contains_avg?` is still `O(n)`, or **linear time**. _**We drop the constant factor**, or in other words, you can ignore any of the constants (or integers) that would otherwise affect how we graph the algorithm._ The `2` and the `+ 1` go away.

`2n` would be a slightly steeper line on our graph, but it is still a **line**. Big O is simply concerned about _patterns_ on the graph. Some other types of Big O will be drastically different than straight lines.

# **Logarithmic Time**

Let's consider another real world example before we dive into our next runtime.

Imagine the world's **WORST** dictionary. 🔥📚 There is no pattern to the order of the words; they're completely random. How would you go about finding any specific word in this dictionary? Perhaps using linear time:

- Find the first word in the dictionary.
- Check the first word: is it what we're looking for?
- Nope, okay, let's move on.
- Repeat ad nauseum.

In this world's worst dictionary, clearly finding a word in a "dictionary" with 10 words would take a lot less time than in a dictionary with 10,000 words.

But is this how a real alphabetized dictionary works? **_No!_** By having an alphabetized dictionary, we can flip to the appropriate letter, and then flip through the surrounding pages until we finally find the word that we're looking for. 🎉 🎉 🎉

![Creepy Book](https://media.giphy.com/media/l1J9HWBKLp20YfNAY/giphy.gif)

But it wouldn't **REALLY** take us significantly longer to find the word we're looking for in a dictionary with 101,000 words compared to a 100,000 word dictionary. There's definitely some relationship to the size of the dictionary and the time it would take, but it's not 1:1 linear.

Thinking about this algorithm further, let's say we:

```
open the dictionary to the exact middle word.
is the word we want before it or after it
if (before) {
  basically throw out the last half of the dictionary.
  If our word exists it cannot be in that half

  look at middle word of first half
  repeat this procedure
} else if (after) {
  basically throw out the first half of the dictionary.
  If our word exists it cannot be in that half

  look at middle word of last half
  repeat this procedure
}
```

Each time we look at a word, the size of our input gets smaller by half. We divide by 2, divide by 2, divide by 2, etc.

![Cut Books](public/cut_books.png)

#### _HINT HINT, THIS MIGHT BE ANOTHER BIG O RUN TIME..._ 🙊

## What's the Deal with Sorting?

![Sorting Hat](https://media.giphy.com/media/PjTAj8HqlezBu/giphy-tumblr.gif)

First, let's create an `arr` of 1,000 random numbers:

```js
arr = [217, 777, 229, 696, 417, 897, 507, 222, 708, 14, 462, 381, 469, 152, 759, 443, 344, 313, 760, 850, 94, 686, 354, 937, 487, 586, 149, 770, 829, 59, 467, 69, 756, 972, 36, 80, 553, 900, 676, 498, 303, 649, 711, 496, 606, 805, 928, 828, 349, 609, 842, 587, 865, 834, 795, 857, 974, 491, 942, 828, 478, 157, 144, 277, 99, 534, 884, 712, 187, 486, 548, 76, 272, 438, 455, 399, 635, 112, 326, 686, 190, 554, 64, 741, 763, 415, 783, 514, 93, 191, 369, 844, 341, 417, 414, 934, 209, 726, 33, 281, …]
```

In the below `linearSearch` function, it will take an array and a target number as arguments.

```js
const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Remaining elements to search: ${arr.length - i}`);

    const elem = arr[i];
    if (elem === target) {
      return target;
    }
  }
  return false;
};
```

- It will iterate through every element in the array.
- For each element that is yielded to the block, it will first log the number of elements left in the array to compare
- Then it will compare that element against the target number
- No, okay, let's try again
- And eventually it will return the number if it is equivalent to the target number (_or_ it may iterate through the entire array with no match)


When `linearSearch(arr, 55)` is run, searching for the target of `55`, the result was:

```js
// Remaining elements to search: 1000
// Remaining elements to search: 999
// Remaining elements to search: 998
// Remaining elements to search: 997
// Remaining elements to search: 996
// ...
// Remaining elements to search: 411
// Remaining elements to search: 410
// Remaining elements to search: 409
// Remaining elements to search: 408
// Remaining elements to search: 407
// 55
```

**If you create an array of your own and run the same function, you may be able to find your targeted number, it may take longer, or it may _never_ find it.** 👹👹

If we create a `sortedArr1` of 1,000 sorted elements:

```js
sortedArr1 =  [1, 1, 2, 4, 6, 7, 7, 7, 8, 8, 9, 9, 9, 10, 10, 10, 12, 12, 15, 15, 15, 17, 18, 18, 19, 19, 20, 21, 22, 22, 23, 23, 24, 26, 27, 28, 29, 30, 32, 32, 32, 33, 34, 34, 35, 35, 36, 38, 38, 40, 41, 41, 41, 43, 44, 45, 46, 46, 47, 48, 50, 51, 53, 55, 55, 55, 55, 56, 57, 58, 58, 59, 60, 61, 62, 64, 65, 66, 67, 67, 67, 67, 68, 69, 70, 70, 70, 71, 73, 74, 74, 76, 77, 78, 78, 79, 80, 82, 83, 83, …]
```

When  `linearSearch(sortedArr1, 71)` runs with this new, sorted array, the result might resemble...

```js
// Remaining elements to search: 1000
// Remaining elements to search: 999
// Remaining elements to search: 998
// Remaining elements to search: 997
// Remaining elements to search: 996
// ...
// Remaining elements to search: 915
// Remaining elements to search: 914
// Remaining elements to search: 913
// 71
```

The runtime of `linearSearch` **_regardless of whether we run it with an unsorted or a sorted array_** is... 🤔 🤔 🤔

#### **_O(n) or linear time!_**

**The array being sorted DID NOT AFFECT the performance of the algorithm.**

![Gasping Kitten](https://media.giphy.com/media/vSSdLSLbGIXio/giphy.gif)

**If we DO have a sorted array, we 👏 can 👏 do 👏 better 👏 than linear time.**

**Because the array is sorted, we know there is a pattern to arrangement of the elements, and we can use that knowledge to structure our search for a targeted element differently.** _(Please note, this function is recursive, which we won't review in this lecture.)_

Below is a **_binary search_** function.

```js
const binarySearch = (arr, target) => {
  console.log(`Remaining elements to search: ${arr.length}`);

  const midpoint = Math.floor(arr.length / 2);
  const middle = arr[midpoint];

  if (arr.length <= 1) {
    return middle === target ? target : false;
  }

  if (middle === target) {
    // we found the thing
    return target
  } else if (middle >= target) {
    // let's look in the first half
    return binarySearch(arr.slice(0, midpoint), target);
  } else if (middle < target){
    // let's look in the second half
    return binarySearch(arr.slice(midpoint), target);
  }
};
```

- It will identify the element at the midpoint of the array
- It will determine if the midpoint is equivalent to the target integer
- If it is, return it
- If not, determine if the midpoint is greater or less than the target,
- Slice off everything that is in the half of the array that we do NOT care about
- Search the new, halved array for the targeted number again

Let's see it run... `binarySearch(sortedArr1, 201)`

```js
// Remaining elements to search: 1000
// Remaining elements to search: 500
// Remaining elements to search: 250
// Remaining elements to search: 125
// Remaining elements to search: 63
// Remaining elements to search: 32
// Remaining elements to search: 16
// Remaining elements to search: 8
// Remaining elements to search: 4
// Remaining elements to search: 2
// 201
```

### WOW!

It _ONLY_ had to do 10 units of work in order to find `201` as compared to hundreds (or more! 💀) units of work in the `linearSearch()`

With a sorted array of 2,000 elements:

```js
sortedArr2 = [0, 1, 1, 1, 1, 1, 2, 2, 4, 4, 5, 5, 6, 7, 7, 7, 7, 8, 8, 10, 11, 11, 11, 12, 12, 13, 13, 14, 14, 15, 16, 16, 17, 18, 18, 18, 19, 20, 20, 20, 21, 21, 21, 22, 22, 22, 22, 22, 22, 23, 24, 25, 25, 25, 25, 25, 26, 27, 27, 27, 28, 28, 28, 28, 29, 29, 29, 30, 31, 31, 32, 32, 32, 32, 32, 32, 33, 33, 34, 34, 35, 36, 36, 37, 38, 39, 39, 40, 40, 41, 42, 43, 43, 43, 43, 44, 44, 47, 47, 47, …]
```

When `binarySearch(sortedArr2, 537)` runs, the result would be:

```js
// Remaining elements to search: 2000
// Remaining elements to search: 1000
// Remaining elements to search: 500
// Remaining elements to search: 250
// Remaining elements to search: 125
// Remaining elements to search: 62
// Remaining elements to search: 31
// Remaining elements to search: 16
// Remaining elements to search: 8
// Remaining elements to search: 4
// Remaining elements to search: 2
// 537
```

Here's a really crazy thing: `sortedArr2` is double the size of `sortedArr1`. With the `linearSearch` function we would, therefore, double the amount of work. What happens with the `binarySearch` is **only one additional unit of work**.

_The size of the input (`n`) has to double in size in order for our computer to have to do 1 more unit of work._ 🙀🙀🙀

## The Big O of `binarySearch` is called **logarithmic time** or `O(log n)`. It is the **yellow** line on the graph below!

![Big O Graph](public/big o graph.png)

**_Logarithm means sloooOoOOOoOoOooOoow growing. The arc on the line is gradually growing along the y-axis as it extends along the x-axis._**

_(If you care to know, it's really `log base 2` and that 2 comes from the "cut in half; cut in half; cut in half" part of the procedure, but this is usually left off.)_

**This procedure can drastically 👇 decrease 👇 the runtime of algorithms.**

![Snailed It](https://media.giphy.com/media/39wmvOJiUa3mxNembg/giphy.gif)

# **Quadratic Time**
## Now Back to that Discussion Question...

As a reminder, you were asked to create a function called
`hasTargetSum` that receives two arguments:
  * an array of integers
  * a target integer

The function should return all pairs of numbers found in the array that add to the target number.

Now if we were going to pseudo-code out a potential solution, it may look like this:

```
Make an empty array `results`

Look at each element (i)

try to combine it with every other element (j)

if (i + j == the target) {
  add the pair to the results array
}

return results
```

Which we could write in Javascript as follows:

```js
const hasTargetSum = (arr, target) => {
  const results = []

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i]

    for (let j = 0; j < arr.length; j++) {
      const next = arr[j]

      if (current + next === target) {
        arr.push([current, next])
      }
    }
  }

  return results
}
```

**What's the Big O of this?**

Well, let's think about it together.

For every element of the array (that's `O(n)`) we have to try to combine it with **_every other element of the array_** (also `O(n)`).

With an array of 8 elements, `hasTargetSum` would add the first element to 8 other things. Then for the second element, `hasTargetSum` would add it to all 8 other elements. This would occur for every element in the array. In total, this function would do 8 * 8 units or work, or 64 comparisons.

![Road Runner](https://media.giphy.com/media/LfT85xyPFiGrK/200w_d.gif)

## This is `O(n^2)` or **_"O of n squared"_** or **_Quadratic Time_** and is very 🐆 🐆 🐆 _fast growing_. Doubling the size of the input (`n`) _quadruples_ the amount of work that the computer has to do.

### Quadratic time is the blue line on the graph below.

![Big O Graph](public/big o graph.png)


**The TL;DR of Big O Notation is that if you see a loop inside of a loop, it is O(n^2).** 🤓

### Optimizing
If your version of `hasTargetSum` produced duplicates in your outputs, i.e. (`[[3,7], [7,3]]`), your function simply combined each element with every single other one. Really, it just needs to compare each element to the remaining elements that it has not yet compared.

Simply changing the inner loop to start at the next element, will remove the duplicates in the outputs...

```js
for (let j = i + 1; j < arr.length; j++)
```

But Big O has **NOT** changed with this refactor! 🤯 It is still quadratic time. REMEMBER, that we drop the constants and focus on the high level summary, so even though the refactor is more accurately `n` times `n minus a little`, we would still categorize the runtime as `O(n^2)`. HOWEVER, just because we haven't changed the Big O **doesn't** mean that optimizations like this are **not worth making**. 👀 👀

## So How *Exactly* Can We Approach Linear Time from Quadratic Time???

![Confused Garfield](https://media.giphy.com/media/ZNnQvIYzIBmZAbrBR7/giphy-downsized.gif)

There is a way to solve this problem in linear time: in other words, with **_one loop_**.

### In computer science, everything is a tradeoff.

**If we want our algorithm to take up less _time_, we will have to take up more _space_.** This is typically an acceptable tradeoff to make. 💸 Memory is cheap.

Let's begin by allocating an extra data structure in memory. The algorithm will store the numbers that it has already iterated through and then check if the target number exists in the secondary array of "seen" numbers.

The insight is that if the target is `10` and the current num is `6`, the function should know if it has already seen a `4` (i.e. `target - current`; `10 - 6`).

```js
const hasTargetSum = (arr, target) => {
  const results = []
  const numsIHaveAlreadySeen = []

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i]
    const numIWant = target - current

    if (numsIHaveAlreadySeen.includes(numIWant)) {
      arr.push([current, numIWant])
    }

    numsIHaveAlreadySeen.push(current)
  }

  return results
}
```

But we're still using two loops!

It may seem like there are not, but the runtime of `.includes` is the same linear time that we've seen earlier in this lecture. In Ruby, these loops can often be hidden from us. Every time you see a `.compact` or a `.uniq`... that's a loop.

But are there any other data structures that contain values?

![Pondering Prince of Bel Air](https://media.giphy.com/media/y3QOvy7xxMwKI/giphy-downsized.gif)

## **Hashes && Constant Time**

When you have a hash of key-value pairs, you can ask the hash for the value by calling the key.

```ruby
hash = {name: "Annie"}
hash[:name]
# Annie

hash[:something_else]
# nil
```

## The Big O of asking a hash if it has a matching key is **_Constant Time_**, or `O(1)`.

Determining if a hash has a key in it works **_independently_** of the number of elements in the hash. A hash with 10 key value pairs or a hash with 10,000 key value pair can has equally fast look ups.

Let's figure out how this works....

![Messy Pile of Clothes](https://www.designindaba.com/sites/default/files/styles/scaledlarge/public/node/news/22234/clothes-pile.jpg?itok=nzZBUzhq)

If we're searching for a specific sock in this giant pile of clothes, what is the Big O of this algorithm?

It's O(n):
- Pull out one piece of clothing
- Is the missing sock?
- If yes, great!
- If not, let's try again.  
- Pull out the next item of clothes.
- Repeat until your pile of clothes has become two or more piles of clothing...

Now, imagine some Marie Kondo style drawer of very neat clothes:

![Neat Clothes in Drawers](https://i.pinimg.com/originals/b4/cc/c6/b4ccc60804af2f29e58e55f9f64e5272.jpg)

Because every item has a **SINGLE** designated place to live, we can do much better than O(n).

In a perfect universe, you could have an infinite number of infinitely small drawers and a ✨perfect✨ system of remembering where each item lives in it's own special drawer. We could effectively say that finding your missing sock is independent of the total number clothes because there would ONLY be one designated drawer for the sock if it existed. _This is what constant time means._

![Cat Doing Laundry](https://media.giphy.com/media/r1UDWqAh0ajK0/giphy.gif)

Getting back to computers now, the way this is done is with a _hash function_ works (hence the data structure term, 'hash'). **When you ask a hash whether a certain key exists, it runs the key through a _hash function_. The key will ONLY correspond to one SINGLE place in memory where that value must exist if it IS present in the hash.**

So let's refactor `hasTargetSum` so that our algorithm runs in linear time instead of quadratic time!

## Refactor

The inner loop exists because we queried an array with `.includes`. Knowing that hashes have a runtime of constant time, let's refactor so that we utilize a hash instead.

```js
const hasTargetSum = (arr, target) => {
  const results = []
  const numsIHaveAlreadySeen = {}

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i]
    const numIWant = target - current

    if (numsIHaveAlreadySeen[numIWant]) {
      results.push([current, numIWant])
    }

    numsIHaveAlreadySeen[current] = true
    console.log(numsIHaveAlreadySeen); // helps students visualize what is happening
  }

  return results
}
```

Let's see it in action!

```js
array = [1, 3, 5, 7, 9, 11]

hasTargetSum(array, 8)

// {1: true}
// {1: true, 3: true}
// {1: true, 3: true, 5: true}
// {1: true, 3: true, 5: true, 7: true}
// {1: true, 3: true, 5: true, 7: true, 9: true}
// {1: true, 3: true, 5: true, 7: true, 9: true, 11: true}
// => results = [[5, 3], [7, 1]]
```

`hasTargetSum` now truly has one loop, which means this operates **linear time**. This is a 👉 tradeoff 👈 : we took up more space by allocating more memory for this extra hash to make the runtime more efficient.

![Space Dog](https://media.giphy.com/media/YRjZCWEIqMuEU/giphy-tumblr.gif)

## **BUT...**
## **DO NOT PREMATURELY OPTIMIZE...**

Please do NOT leave this lecture thinking...

> Uh oh, I'm thinking of a solution that requires a loop inside of a loop, and i heard that's bad, so there must be a better solution... so I'm going to let that stop me from writing ANY functioning code.

You would mark yourself as an **_amazing_** candidate if you _instead_ said something like...

> Ok,  the solution that I want to attempt will compare every element to every other element. This function will run in O(n^2) time. I want to start writing that code, get it working, and then see if we can refactor into linear time. Usually, you can do that by creating a hash to store data, so that's where I would start.

Even if you don't fully get to the refactored solution, you still did an amazing job by articulating yourself and acknowledging the Big O of your initial solution and how you could refactor for optimization. 💃💃

![You Did It!](https://media.giphy.com/media/26DOoDwdNGKAg6UKI/giphy-downsized.gif)

## **Practice Problem**

There are tons of whiteboarding/algorithm problems that have both a quadratic time solution and a more optimal linear time solution.

Here's an example problem where you can apply this same strategy. Start with the quadratic time solution and refactor to linear time by using a hash.

[Ransom Note Problem](https://gist.github.com/alexgriff/0061bd3ff76c06341a62489899890b01)

Let's Review!
Fastest -> Slowest  
Constant  
Logarithmic  
Linear  
Quadratic

![Big O Graph](public/big o graph.png)

# Crushed It!
![Dancing Michelle](https://media.giphy.com/media/YJ5OlVLZ2QNl6/giphy-downsized.gif)
