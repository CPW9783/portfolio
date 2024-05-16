// Step 1: Import React
import * as React from 'react'
import '../styles/global.css'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <h2 className="text-3xl font-bold">Welcome to my Gatsby site!</h2>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <br></br>
      <p>This will become my portfolio website.</p>
    </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage