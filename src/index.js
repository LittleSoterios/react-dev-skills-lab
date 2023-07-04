
// Import the create route function that allows us to pass a regular HTML Element and create a root component

import { createRoot } from 'react-dom/client'

// Target the root div inside index.html, so we can mount our react app to it
const root = document.getElementById('root')

// import our main component, called App, which will contain our entire application

import App from './App'
import { StrictMode } from 'react'


// Mount the application together using the createRoot and render methods
// the HTML element from our index.html file is passed iniot createRoot, and then we execute the render method passing in our main App component
createRoot(root).render(
  <StrictMode>
    <App/>
  </StrictMode>)


console.log(root)

