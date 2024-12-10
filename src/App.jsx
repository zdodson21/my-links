import './styles/App.css'
import LinkBox from './components/LinkBox.jsx'

function App() {
  return (
    <>
      <div className="content-wrapper">
        <div className="profile-info">
          <img id="profile-pic" src="https://avatars.githubusercontent.com/u/91283128?v=4" alt="Zach Dodson Profile Picture" />
          <p>Frontend Web Developer</p>
          <h1>My Links</h1>
        </div>
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
