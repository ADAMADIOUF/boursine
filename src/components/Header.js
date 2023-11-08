import React from 'react'
import { Fade } from 'react-awesome-reveal'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
// ..
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
})
const Header = () => {
  return (
    <div className='header '>
      <div className="overlay"></div>
      <div className='header-content '>
        <h2 data-aos='fade-right'>
          Découvrez Diakhao : La Cité Mythique de Bour Sine
        </h2>

        <p data-aos='fade-right'>
          Explorez l'histoire riche et la culture vibrante de Diakhao, la
          légendaire cité de Bour Sine Coumba Ndoffene Diouf, à travers notre
          site. Plongez dans les récits historiques, les traditions culturelles
          et les événements captivants qui font de Diakhoa un trésor unique au
          Sénégal. Bienvenue dans le passé et le présent de cette cité mythique.
        </p>
      </div>
    </div>
  )
}

export default Header
