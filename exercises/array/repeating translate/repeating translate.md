
Write a function `repeatingTranslate` that accepts a sentence as an argument.

The function should translate the sentence according to the following rules:

1) words that are shorter than 3 characters are unchanged

2) words that are 3 characters or longer are translated according to the

  following rules:

  a. if the word ends with a vowel, simply repeat the word twice (example:

    'like'->'likelike')

  b. if the word ends with a non-vowel, repeat all letters that come after the

    word's last vowel, including the last vowel itself (example:

    'trash'->'trashash')

Note that if words are capitalized in the original sentence, they should remain

capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.

Can you reduce the problem into helper functions?
