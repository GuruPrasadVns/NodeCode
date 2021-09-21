# Global Object

## console object is a global object i.e. its part of a global scope that means we can access it anywhere.

## we also have bunch of global objects and functions. For Example

### setTimeout() : we used it to call a function after a delay. This is availble inside browsers and Node.

### clearTimeout() : we used it to stop a function calling after a delay.

### setInterval() : we used it to call a function repeatedly after a given delay.

### clearInterval() : we used it to stop a function to call repeatedly.

## In browsers we have window object which represents the global scope. That means all the functions and

## variables that are defined globally we can access them via window object.

### i.e. window.console.log() is equivalent to console.log in browsers. The Javascript engine will prefix

### the console.log statement with window.console.log

## Similarly in Node we have the global object . so, console.log is equivalent to global.console.log.

## When we define any variable var message = 'Hi' in browser it can be accessed via window object but

## in Node it is not added in global scope automatically. Refer app.js for code example. In Node that are

## only scoped to the file in which they are defined.
