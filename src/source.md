React does not render `false`, `null`, `undefined`, or `NaN` in the DOM. These values, when used in JSX, will result in nothing being displayed.

However, `0` and empty strings (`""`) are exceptions:

- **`0`** is rendered in the DOM because it is considered a valid React node. This means that if `0` is the result of an expression, it will appear in your UI.
- **Empty strings** (`""`) are also considered valid outputs and are rendered as well.

//\* 1. Variables
//? You can embed any JavaScript variable within JSX by enclosing it in curly braces. The value of the variable will be inserted into the DOM at the respective location.

//\* 2: Expressions
//? JSX allows you to write JavaScript expressions inside curly braces. This includes operations, function calls, and other JavaScript expressions that produce a value.

//\* 3. Function Calls
//? Functions, especially those that return JSX, can be invoked directly within your JSX.

## ImportExport

Default Export: A file can have only one default export.
Default Import: When importing a default export, you can name the import whatever you like.

Named Export:
A file can have multiple named exports.
Each named export must be explicitly exported.

Named Import:
When importing named exports, the import names must match the export names exactly.
Named imports must be enclosed in curly braces.

## Inline Styles

Inline styles are applied directly to the HTML elements via the style attribute. This approach uses JavaScript objects to define the CSS properties and values.

# 1. JavaScript Object Syntax

Inline styles in React are specified using JavaScript objects. Property names are written in camelCase instead of the traditional CSS kebab-case.

const style = {
backgroundColor: 'blue',
fontSize: '16px',
};

# 2. Units

For most numeric values, you need to specify units as a string (e.g., '16px'). Some properties, like zIndex, can take numeric values directly.

const style = {
padding: '10px',
zIndex: 1,
};

# 3. Performance Considerations

Defining inline styles directly within the JSX can lead to performance issues because a new object is created on every render. To avoid this, define styles outside of the render method or as constants.

const buttonStyle = {
backgroundColor: 'blue',
color: 'white',
};

function MyButton() {
return <button style={buttonStyle}>Click Me</button>;
}

# CSS conditional stylings in React js

You can use ternary operators to add conditional stylings to your CSS.

# Applying Padding in Tailwind

Here are both approaches:

## Extended Spacing Scale:

If you've extended the spacing scale, you can use the custom classes:

<div class="py-32 px-12">Content</div>

## Arbitrary Values:

You can use arbitrary values directly:

## <div class="py-[3.2rem] px-[1.2rem]">Content</div>
