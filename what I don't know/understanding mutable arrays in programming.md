When people say that arrays can be mutable, 

what they mean is that the values contained in an array can be changed. 

It's true that once data is stored in memory, 

it cannot be truly "mutated" in the sense of changing the underlying bits at the lowest level of the system. 

However, when we talk about mutability in programming, 

we are typically referring to the ability to change the value of a variable or data structure in higher-level programming languages.

In the case of arrays, mutability refers to the fact that we can change the values of individual elements in the array, 

add new elements to the array, or remove existing elements from the array. 

This is because arrays are typically implemented as a contiguous block of memory with each element occupying a fixed number of bytes. 

When we change the value of an element in the array, we are simply writing a new value to the memory location that corresponds to that element.

So while it's true that the underlying bits in memory do not truly mutate, 

from a higher-level perspective, we can say that arrays are mutable because we can change their contents without creating a new array.


## How does it work behind the scenes to understand where arrays start to be recognized to be mutable. What level of depth do arrays start to be recognized to be mutable?
