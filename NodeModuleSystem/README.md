## Global Object

### Global objects are part of the global scope which means we can access it from anywhere. For example, console object is a global object.

### There are several global objects and functions available. For Example

#### setTimeout() : we used it to call a function after a delay. This is availble inside the browsers and Node both.

#### clearTimeout() : we used it to stop a function calling after a delay.

#### setInterval() : we used it to call a function repeatedly after a given delay.

#### clearInterval() : we used it to stop a function to call repeatedly.

### In browsers we have window object which represents the global scope. That means all the functions and variables that are defined globally we can access them via window object.

#### i.e. window.console.log() is equivalent to console.log in browsers. The Javascript engine will prefix the console.log statement with window.console.log

### Similarly in Node we have the global object called global.So, console.log is equivalent to global.console.log.

### When we define any variable var message = 'Hi' in browser it can be accessed via window object but in Node it is not added in global scope automatically. Refer app.js for code example. In Node that are only scoped to the file in which they are defined.

## Modules

### Problem With Global Scope

#### If two functions defined with the same name then latter definition will override the previous definition.In order to build reliable and maintainable applications we should avoid defining variable and functions in global scope. The soution of this is modularity.

#### We need small building blocks or modules where we can define our variables and functions and club them together.In this way, two variables and functions with the same name don't override each other.

#### Every file in Node is considered as module. The variable and function defined to that module is scoped to that file only. In object oriented programming term we say that they are private and not visible outside to that module. So, Every Node application has atleast one file or module which is called the main module.

#### There is one object availble in Node called module which appears to be global but it is not. You cannot access it using global.module.

### Creating A Module

#### refer logger.js

### Loading A Module

#### For loading a module we need a require function which is available in Node but not available in browsers. This require function returns the object exported from the target module.

#### Refer app.js to know how to load logger.

### Module Wrapper Function

#### IIFE : Immediately Invoked Function Expression.

#### Node does not execute our code directly. It wraps code of every module inside of a function similar to below function signature. This function is called Module Wrapper Function.

##### function(exports, require, module, **filename, **dirname)

### Path Module : The path module provides utilities for working with file and directory path.

#### To see the built in modules of Node go to the following link https://nodejs.org/dist/latest-v14.x/docs/api/

#### To see the details of path module https://nodejs.org/dist/latest-v14.x/docs/api/path.html

### OS Module : In built module of Node to give information about the Operation System

### To see the details of os module https://nodejs.org/dist/latest-v14.x/docs/api/os.html

### File System Module : The fs module enables interacting with the file system

#### To see the details of fs module https://nodejs.org/dist/latest-v14.x/docs/api/fs.html

### In file system module there are two versions of any method available synchronous and non-synchronous version. You should use asynchronous method in the real world application. Synchronous method is only for simplicity.

### Events Module:

#### One of the core conecpt in Node is the concept of Event.In fact lots of core functionality of Node is based on this core functionality of Event.

#### An Event is basically a signal that indicates that something has happened. For example, in Node we have a class called HTTP which we can used to build a web server. Everytime when HTTP class listen any request it raises an Event.Our job is to response to that event which is basically to return a appropriate response.

#### To see the details of event module https://nodejs.org/dist/latest-v14.x/docs/api/events.html

#### In Events module we have one important class called EventEmitter. It is one of the core builing blocks of Node and lots of classes is based on this EventEmitter.

#### A listener is a function which executes when an event is raised.

### Event Argument

#### emitter.emit('messageLogged',{id: 1, url: 'https://..' }) this second argument of emit method is called Event Argument.

### HTTP module

#### https://nodejs.org/dist/latest-v14.x/docs/api/http.html

#### based on the EventEmitter class.
