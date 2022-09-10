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

# React Essentials

## Why React?
* increasingly complex Apps, require more DOM manipulations resulting in a slower user experience. 
* React addresses performance issues using the concept of a virtual DOM, an in-memory representation of the DOM that only updates nodes that have changed and not the entire DOM itself. 
* Reusable components written entirely in JSX, an XML/HTML-like syntax that extends ECMAScript so that the code can coexist with JavaScript code.

## create react Apps
## start
## how it works transpile
## what is react DOM
* The react-dom package serves as the entry point to the DOM to render the JSX by using the virtual DOM. Why isn't that just included in the react package? Because React isn't confined to the browser. Paired with the right libraries, React can be used in native app development or even VR development!