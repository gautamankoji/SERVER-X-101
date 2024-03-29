---
title: React Hooks for Managing Media Queries
lastmod: 2019-07-08T23:11:49-04:00
publishdate: 2019-07-08T23:11:49-04:00
author: Gautam Ankoji
draft: false
description: Learn how to handle media queries in React using the useMediaQuery() hook.
tags: 
    - react
    - hooks
---

[Hooks](https://reactjs.org/docs/hooks-intro.html) provide a way to use state and other React features without using class components.

## useMediaQuery() Hook

This simple hook facilitates the sharing and rendering of components, logic, and styling based on media queries directly from your JSX code.

### Creating the Hook

{{< file "react" "hooks/useMediaQuery.jsx" >}}
```jsx

import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
}

export default useMediaQuery;
```

### Using the Hook

{{< file "react" "App.js" >}}
```jsx

import React from "react";
import "./index.css";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  // Define the media query
  const isDesktop = useMediaQuery('(min-width: 960px)');

  return (
    <div className="App">
      {/* Conditional rendering based on the media query */}
      {isDesktop ? <h1>Desktop</h1> : <h1>Mobile</h1>}
      <Navbar isDesktop={isDesktop}/>
    </div>
  );
}

// Navbar component with conditional styling
const Navbar = ({isDesktop}) => (
  <nav className={`base ${isDesktop ? "desktop" : "mobile"}`}>
    {/* SVG icon repeated multiple times */}
    <Icon />
    <Icon />
    <Icon />
    <Icon />
  </nav>
);


// SVG icon component
const Icon = () => (
  <svg viewBox="0 0 512 512">
    {/* SVG path */}
    <path
      fill="currentColor"
      d="M448 96h-64l-64-64v134.4a96 96 0 0 0 192 0V32zm-72 80a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm80 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm-165.41 16a204.07 204.07 0 0 0-34.59 2.89V272l-43.15-64.73a183.93 183.93 0 0 0-44.37 26.17L192 304l-60.94-30.47L128 272v-80a96.1 96.1 0 0 0-96-96 32 32 0 0 0 0 64 32 32 0 0 1 32 32v256a64.06 64.06 0 0 0 64 64h176a16 16 0 0 0 16-16v-16a32 32 0 0 0-32-32h-32l128-96v144a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V289.86a126.78 126.78 0 0 1-32 4.54c-61.81 0-113.52-44.05-125.41-102.4z"
    />
    {/* Additional SVG path */}
    <path
      fill="currentColor"
      d="M376 144a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm80 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM131.06 273.53L192 304l-23.52-70.56a192.06 192.06 0 0 0-37.42 40.09zM256 272v-77.11a198.62 198.62 0 0 0-43.15 12.38z"
    />
  </svg>
);

export default App;
```

### Optional CSS Styling

{{< file "css" "index.css" >}}
```css

:root {
  --dark: #151718;
  --text: #00c3ff;
  --svg: #ea60ff;
  --nav: #212223;
  font-size: 1rem;
}

body {
  margin: 0;
  font-family: sans-serif;
  background-color: var(--dark);
}

.app {
  position: absolute;
  margin: auto;
  top: 25%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.app h1 {
  color: var(--text);
  font-size: 4rem;
  font-weight: 400;
}

.app svg {
  color: #ea60ff;
  margin: auto;
  height: auto;
  transition: all 250ms ease;
}

.base {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--nav);
  transition: all 250ms ease;
}

.desktop {
  top: 0;
  left: 0;
  width: 5rem;
  height: 100vh;
  flex-direction: column;
}

.mobile {
  bottom: 0;
  height: 5rem;
  width: 100vw;
}
```
