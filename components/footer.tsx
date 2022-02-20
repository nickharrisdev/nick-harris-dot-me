import { faGithub, faLinkedin, faMastodon } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <>
      {/* links */}
      <div id="contact" className="contactIconsContainer">
        <h2>Get in touch</h2>
        <div className="iconsContainer">
          <a href="https://www.linkedin.com/in/nick-harris-web-dev/" rel="noreferrer" aria-label="Linked In" className="no-underline" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className="faIcon"/>
          </a>
          <a href="https://www.github.com/nickharrisdev" className="no-underline" target="_blank" rel="noreferrer" aria-label="Github">
            <FontAwesomeIcon icon={faGithub} className="faIcon"/>
          </a>
          <a href="https://fosstodon.org/@nickharris" className="no-underline" target="_blank" rel="noreferrer" aria-label="Mastadon">
            <FontAwesomeIcon icon={faMastodon} className="faIcon"/>
          </a>
          <a href="mailto:nick@nickharris.me" className="no-underline" target="_blank" rel="noreferrer" aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} className="faIcon"/>
          </a>
        </div>
      </div>  
    </>
  )
}
