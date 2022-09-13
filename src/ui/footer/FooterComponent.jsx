import { Tooltip } from 'antd';
import images from '../../helpers/cardImg';
import logo from '../../helpers/cardImg';  

export const FooterComponent = () => {
  return (
    <div className='bg-footer'>
      <div className="container-fluid">
          <div className="footer-icon">
            <ul>
                <li>
                  <Tooltip title='Linkedin'>
                    <a href="https://www.linkedin.com/in/walter-daniel-carrizo-52a4531a1/" target="_blank">
                        <img src={images.linkedin} alt="logo linkedin" />
                    </a>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip title='Instagram'>
                    <a href="https://www.instagram.com/wdc.91/" target="_blank">
                        <img src={images.instagram} alt="logo instagram" />
                    </a>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip title='Github'>
                    <a href="https://www.linkedin.com" target="_blank">
                        <img src={images.github} alt="logo github" />
                    </a>
                  </Tooltip>
                </li>
            </ul>
          </div>
        <p>Copyrights © todos los derechos reservados</p>
        <div className="logo-footer">
          <img src={logo.logo} alt="logo Walter Daniel Carrizo" />
        </div>
      </div>
    </div>
  )
}
