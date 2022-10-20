# General notes
---
## Index

- [General Description](#general-description)
- [Rules](#rules)
- [Markdown Examples](#markdown-examples)

---
## General description
This project is intended to be a practice about basic programming concepts. 
Changes will be added as I learn new things.

---
## Rules
This project has a simple set of **rules**.
1. Language is english, for the sake of underestandability.
2. Code does not seek for utility, is written with the only purpose of __learning.__ So, code won't be performant, nor compact.
3. Is heavily encouraged to make *silly examples* and to [*add cats*](https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg) wherever is possible.
---
## Markdown Examples 

### Example of a link: 
<https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg>

### Example of a variable
[1a]: https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg
I like [Cats][1a] very much

### Example of internal links
[Link to Index](#index)

### Example of an image: 
![A nice cat][1a]

### Example of an inline code
The next text is code: `const events = {};`

### example of a block of code
javascript:
```javascript
const suscribe = function (event, fn) {
        if (!events[event]) {
            events[event] = [];
        }
        events[event].push(fn);
    }
```
html:
```html
<h1>Title</h1>
<p>Hello!</p>
```

### Example of a table
|Header 1 |Header 2| Header 3|
|---|:---:|:---|
|a|b|c|
|d|e|f|

### Example of css formatting
```css
<style>
    p {
        color : #999999
    }
</style>
```
<style>
    p {
        color : #999999
    }
</style>


