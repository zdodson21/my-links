import '../styles/LinkBox.css'
import githubDarkLogo from '../assets/GitHub_Invertocat_Dark.svg'

function LinkBox(props) {
  return (
    <>
        {/* TODO need image for site + alt text */}
        {/* TODO need anchor URL + text variable*/}
        <a href={props.URL} className='link-wrapper' target='_blank'>
          <img src={githubDarkLogo} alt="GitHub Logo" />
          <div className="text-container">
            <p>{props.linkText}</p>
          </div>
        </a>
    </>
  )
}

export default LinkBox
