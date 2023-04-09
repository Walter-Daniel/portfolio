import { GithubOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import logo from '../../helpers/cardImg';  

export const FooterComponent = () => {
  return (
    <div className='bg-footer' id='contact'>
      <div className="container-fluid footer-flex" data-aos="zoom-in">
          <div className="footer-icon">
            <ul key="footer-icons">
                <li key="linkedin">
                  <Tooltip className='icon-social-media'>
                    <a href="https://www.linkedin.com/in/walter-daniel-carrizo/" target="_blank">
                        <LinkedinOutlined /> 
                        <p>Linkedin</p>
                    </a>
                  </Tooltip>
                </li>
                <li key="github">
                  <Tooltip className='icon-social-media'>
                    <a href="https://github.com/Walter-Daniel" target="_blank">
                      <GithubOutlined /> 
                      <p>Github</p>
                    </a>
                  </Tooltip>
                </li>
            </ul>
          </div>
          <div className="contact-footer">
          <p>Email: walterdcarrizo.19@gmail.com</p>
        </div>
        <div className="logo-footer">
          <img src={logo.logo} alt="logo Walter Daniel Carrizo" />   
          <p>Copyrights © todos los derechos reservados</p>
        </div>
        
      </div>
    </div>
  )
}
