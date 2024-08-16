/*
<div id='parent'>
    <div id="child1"> 
        <h1> I am h1 Tag </h1>
        <h2> I am h2 Tag </h2>
    </div>
    <div id="child2"> 
        <h1> I am h1 Tag </h1>
        <h2> I am h2 Tag </h2>
    </div>
</div>
*/

// Create a React element for the parent div, which contains two child divs with h1 and h2 elements
const parent = React.createElement(
  "div",
  { id: "parent" }, // Parent div with an id of 'parent'
  [
    React.createElement(
      "div",
      { id: "child1" },
      React.createElement("h1", {}, "I am h1 Tag"),
      React.createElement("h2", {}, "I am h2 Tag")
    ),
    React.createElement(
      "div",
      { id: "child2" },
      React.createElement("h1", {}, "I am h1 Tag"),
      React.createElement("h2", {}, "I am h2 Tag")
    ),
  ]
);

// Log the parent element to the console
console.log(parent);

// Uncommented code below is for creating and rendering additional React elements
// Create a React element for the heading
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React"
// );

// Log the heading element to the console
// console.log(heading);

// Create a React element for a paragraph
// const para = React.createElement("p", {}, "This is a paragraph from React");

// Create a React element for an informational text
// const info = React.createElement(
//   "p",
//   { id: "info" },
//   "This is important info from React"
// );

// Create a React element for a description
// const des = React.createElement("p", {}, "This is a description from React");

// Get the root DOM element to render React components into
// const root = document.getElementById("root");

// Create a React container to hold multiple elements and render it into the root DOM element
// const container = React.createElement("div", {}, heading, para, info, des);

// Render the parent element into the root DOM element
const container = React.createElement("div", {}, parent); 
ReactDOM.render(container, root);
