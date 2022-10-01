import React from 'react'
import { FaBars } from 'react-icons/fa'
import logo from './logo.svg'
import { links, social } from './data'


const Navbar = () => {
  const [showLinks, setShowLinks] = React.useState(false)
  const linksContainerRef = React.useRef(null)
  const linksRef = React.useRef(null)

  React.useEffect(() => {
    const linkHeight = linksRef.current.getBoundingClientRect().height
    // console.log(linkHeight)
    if (showLinks) {
      linksContainerRef.current.style.height = `${linkHeight}px`
    }
    else{
      linksContainerRef.current.style.height = '0px'
    }

  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className='logo' />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        {/* `${showLinks ? 'links-container show-container' : 'links-container'}` //we can use like this in className */}
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((link) => {
            const { id, url, icon } = link
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
