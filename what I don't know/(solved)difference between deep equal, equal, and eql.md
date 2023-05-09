In testing framework `mocha`,

when do I use 

`deep.equal`

`equal`

`eql`

?

---

`eql` and `deep.equal` checks whether they have the same content. They work like `==`.

`equal` checks for strict equality. It works like `===`

`deep.equal` and `eql` do the same functionality except that `deep.equal` allow other assertions to chain.
