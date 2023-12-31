# NR-EP-4
Namaste React Episode 4!!
# is JSX mandatory for React?
No, JSX is just a sugar coating for the original React core. 
At the EOD, jsx code is transpilied into react core that is, React.createElement and etc!
SO, anything written in JSX can also be written using just JS but JSX makes things easier and developer friendly.

# React without ES6
ES6, or ECMAScript 2015, is not strictly mandatory for React, but it is highly recommended. 
Many of the features introduced in ES6, such as arrow functions, classes, destructuring assignment, template literals, 
and the let and const keywords, provide cleaner and more concise syntax. 
These features can significantly enhance your development experience in React.
while you can use React with ES5, using ES6 or a later version is highly recommended 

# Comments in JSX
/* This is a single-line comment in JSX */
/* 
    This is a
    multi-line comment
*/

# <React.Fragment></React.Fragment> and <> </>
Both of the above-mentioned are used to wrap the multiple elements into one node without using another parent element.
Instead of using multiple parent nodes, we use these for wrapping multiple elements.
Both are used for the same purpose, but "<></>", which is a short-hand property, is preferred more.

# virtual DOM, Reconciliation

DOM (Document Object Model):
The DOM is a programming interface for web documents. It represents the structure of a document as a tree of objects.
Each HTML element, attribute, and piece of text in the document is a node in this tree.

Virtual DOM:
Think of the Virtual DOM as a copy of the real DOM.
When changes happen in a web application (like when you click a button), they are first made to the Virtual DOM.
The Virtual DOM is a lightweight copy that exists in memory.

Reconciliation:
After changes are made to the Virtual DOM, React compares it with a previous version of the Virtual DOM (before the change).
React identifies the differences (changes) between the new and old Virtual DOMs.

Minimizing DOM Manipulation:
Instead of updating the real DOM directly for every small change, React figures out the most efficient way to update the actual DOM.
It calculates the minimal number of steps needed to update the real DOM to match the new state.

Efficiency:
This process is more efficient than directly manipulating the real DOM for every change.
React batches the changes and updates the real DOM in a way that causes the least disruption.

In simple terms, the Virtual DOM is like a blueprint that React uses to make smart and efficient updates to the actual web page. 
It helps React update only what's necessary, making your web applications faster and more responsive.

# React Fiber

React Fiber is a set of internal algorithms in React's core reconciliation process. 
It's like the engine of React that powers the way React handles updates, changes, and interactions in your application.
React Fiber is React's way of making sure your app stays fast and responsive, even as it grows in complexity. 
It's like giving React a turbocharger to speed up its internal processes.

# why and when do we need keys in react?
When we have multiple react components, the rendering of components when added a new component with those existing components, confuses the internal react. 
To render all components properly, all the components must have unique Id's as a key property for them. 

We can use Index as keys when we dont have any unique id for the component. 
Using index as key is not recommended but something is better than nothing.
So, we can use index as keys but as a last option.

# Props in React

Props are known as properties. These are passed to React components as dynamic values.
We can say that, props, at the end of the day are similar to JS method's arguments.
React Components are like Methods, and Props are arguments that are passed to methods.

# Config Driven UI

An application can be dynamic based on it's location used.


# NR EP 5

# Difference between Named export, Default export and * as export?

Named Exports:

When you use named exports, you explicitly export variables, functions, or classes by their names.
You can have multiple named exports in a single module.
To import named exports, you use curly braces {} and specify the names of the exports.

Default Export:

With default exports, you export a single value as the default export for a module.
There can be only one default export per module.
When importing, you can choose any name for the default import.

* as Export (Namespace Import):

The * as syntax is used to import all exports from a module as properties of an object.
It allows you to access all the exports through a single object.

# What is the importance of config.js file?

the config.js file is important for maintaining a clean, organized, and easily maintainable codebase. It provides a centralized location for configuration settings, promotes separation of concerns, and helps manage environment-specific configurations.

# what are React Hooks?

React Hooks are functions that enable functional components in React to use state and lifecycle features that were previously only available in class components. Hooks were introduced in React 16.8 to provide a more concise and readable way to manage state and side effects in functional components. Each React Hook name is prefixed with the word "use". For example, useState or useEffect. This format was chosen because Hooks let developers use the special features of the React library. So you're useing that special feature of the React library. 
You shouldn’t use Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function, before any return keyword.
Never call Hooks from regular JavaScript functions. You can:
=> Call Hooks from React functional components.
=> Call Hooks from custom Hooks.

# Why do we need a useState Hook?

The useState Hook allows you to create, update, and manipulate state inside functional components.

React has this concept of state, which are variables that hold data that our components depend on and may change over time. Whenever these variables change, React updates the UI by re-rendering the component in the DOM with the current values of the state variables.
The hook takes a single optional argument: an initial value for the state. Then it returns an array of two values:
=> The state variable
=> A function to update the state
To make the application dynamic based on data or config, we use config driven UI.
It means that UI is controlled by config. The data and config comes from backend.
