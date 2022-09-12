---
marp: true
theme: gaia
style: |
  section.lead h1 {
  text-align: center;
  }
  section.middle li{
  text-align: center;
  }
---
<!-- headingDivider: 2 -->
<!--
theme: gaia
class: lead
-->

# React Virtual DOM

##  scope 
* We have a traget locayion to run react.
* babble core 
* JSX is not understood by browsers, so babble core will transpile JSX to JavaScript.

## rendering to DOM
Syntax : `ReactDOM.render(jsx Code , target container)`
```JSX
var target = document.getElementById('root');
ReactDOM.render( <> <h1>Hello World</h1> </> , target);
```
Must have one root element.

## How react virtual Dom Works
* React uses a virtual DOM to determine which nodes need to be updated.
  * React creates a virtual DOM
  * React compares the virtual DOM with the DOM
  * React updates only the changed nodes