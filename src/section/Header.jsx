
import Typed from 'typed.js'
import { useEffect, useRef } from 'react'
import video from '../../assets/portada.webm'

export const HeaderSection = () => {

  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Portfolio!'],
      startDelay: 300,
      typeSpeed: 150,
      backDelay: 150,
      backSpeed: 150,
      smartBackspace: true,
      showCursor: false,
      loop: true
    });
    return () => {
      typed.destroy()
    }
  }, [])
  
  return (
    <div className="header-container" id='header'>
        <div className="header-video">
            <video src={video} type='video/mp4' autoPlay loop muted />
        </div>
        <div className="header-text">
          
            <p>
                Bienvenid@ a mi <br />

                <span ref={el}></span>
            </p>
        </div>
    </div> 
  )
}
