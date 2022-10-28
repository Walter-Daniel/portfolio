
import video from '../../assets/portada.mp4'

export const HeaderSection = () => {
  return (
    <>
       <div className="header-container">
            <div className="header-video">
                <video src={video} autoPlay loop muted/>
            </div>
            <div className="header-text">
                <h1>
                    Hola! me llamo Walter y soy Desarrollador Web
                </h1>
            </div>
       </div>

    </>

   
  )
}
