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