import { GithubOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import logo from '../../helpers/cardImg';  

export const FooterComponent = () => {
  return (
    <div className='bg-footer'>
      <div className="container-fluid" data-aos="zoom-in">
          <div className="footer-icon">
            <ul>
                <li>
                  <Tooltip title='Linkedin' className='icon-social-media'>
                    <a href="https://www.linkedin.com/in/walter-daniel-carrizo/" target="_blank">
                        <LinkedinOutlined />
                    </a>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip title='Instagram' className='icon-social-media'>
                    <a href="https://www.instagram.com/wdc.91/" target="_blank">
                      <InstagramOutlined />
                    </a>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip title='Github' className='icon-social-media'>
                    <a href="https://github.com/Walter-Daniel" target="_blank">
                      <GithubOutlined />
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
