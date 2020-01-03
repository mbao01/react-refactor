## REVIEW

#### Line 14

Component is exported as part of the React object and not a default export in the reack library.
So Component must be imported using the named import syntax.

#### Line 18

ShowResultsFromAPI class should extend the methods and properties in Component. Component should not be invoked here.

#### Line 19

Props must be passed in constructor

#### Line 26

Props are read-only. A component should never modify it's own props. Whether you declare a component as a function or a class, it must never modify its own props.
All React components must act like pure functions with respect to their props. props that need to change should be moved to state.

#### Line 31

`setTimeout` method call callback arg should use an arrow function to maintain the 'this' object.
The `this` object in arrow functions use the `this` object of the lexical environment in which the function is defined.

#### Line 39

To avoid any unexpected behaviours, an arrow function should be used in the `then`'s callback.
The `this` object in arrow functions use the `this` object of the lexical environment in which the function is defined.

#### Line 40

Check `response` truthiness to prevent property access on undefined or null objects

#### Line 25 and Line 29

By convention, since `click` method and `onDisableDelay` method are event handlers, they should begin with "**handle**". Also `click` method name is not descriptive. It should be changed to `handleDataRequest`

#### Line 50

`render` method needs to return a single React DOM node or a call to `React.createElement`. As of version 15.5.4 of React, fragments are not available so I use a `<div>` tag.
Also the expression after the return keyword should be wrapped in parenthesis to prevent automatic semicolon insertion at the end of first line

#### Line 52

JSX does not allow statements. It online allows expressions. So conditional if statement will not work. Use inline conditional/ternary operator. I could leave the two `<p>` element as they are. React is smart enough to optimize at runtime. But for brevity, I'd use a single `<p>` element.

#### Line 60 and Line 61

By convention, react elements name should use PascalCase. Since `<Button>` is not imported, I can assume `<button>`. I also think react elements should not have native html element names.

#### Line 71

`React.PropTypes` has moved into a prop-types library since React v15.5.

#### Line 75

Aside that `ContentContainer` class is undeclared, the export syntax is wrong.
