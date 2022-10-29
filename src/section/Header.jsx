
import video from '../../assets/portada.mp4'
import Typed from 'typed.js'
import { useEffect, useRef } from 'react'

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
    <>
       <div className="header-container">
            <div className="header-video">
                <video src={video} autoPlay loop muted/>
            </div>
            <div className="header-text">
              
                <p>
                    Bienvenidos a mi <br />

                    <span ref={el}></span>
                </p>
            </div>
       </div>

    </>

   
  )
}
