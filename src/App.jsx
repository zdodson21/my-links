// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './styles/App.css'
import LinkBox from './components/LinkBox.jsx'

function App() {
  return (
    <>
      <div className="site-wrapper">
        <h1>My Links</h1>
        <div className="links">
          <LinkBox 
            URL="https://github.com/zdodson21"
            linkText="GitHub"
          />
        </div>
      </div>
    </>
  )
}

export default App
