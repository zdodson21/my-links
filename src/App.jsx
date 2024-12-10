// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import LinkBox from './LinkBox.jsx'

function App() {
  return (
    <>
      <div className="site-wrapper">
        <h1>My Links</h1>
        <LinkBox 
          URL="https://github.com/zdodson21"
          linkText="GitHub"
        />
      </div>
    </>
  )
}

export default App
