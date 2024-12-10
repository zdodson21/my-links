import '../styles/LinkBox.css'

function LinkBox(props) {
  return (
    <>
      <div className="link-box-wrapper">
        {/* TODO need image for site + alt text */}
        {/* TODO need anchor URL + text variable*/}
        <a href={props.URL}>{props.linkText}</a>
      </div>
    </>
  )
}

export default LinkBox
