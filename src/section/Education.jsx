import { Col, Row, Timeline, Tag, Typography, Progress, Tooltip } from 'antd';
import { useState } from 'react';
import { skills } from '../helpers/skills';
const { Text} = Typography;

export const Education = () => {
  const [mode, setMode] = useState('left');
  const info = (text) => {
            return <Tag color="geekblue">{text}</Tag>}

  return (
    <div className='bg-education' id='education'>
      <div className='container-fluid'>
      <div data-aos="zoom-in">
        
        <Row>
        <Col xs={24} lg={12}>
              <div data-aos="fade-right">
                        {/* <div className='bars'>
                        <h2>Habilidades</h2>
                            <Text>Html</Text>
                            <Progress percent={70} />
                            <Text>Css</Text>
                            <Progress percent={70}  />
                            <Text>Boostrap</Text>
                            <Progress percent={70}  />
                            <Text>Javascript</Text>
                            <Progress percent={60} />
                            <Text>React</Text>
                            <Progress percent={50}  />
                            <Text>Ant Design</Text>
                            <Progress percent={45} />
                            <Text>Node JS</Text>
                            <Progress percent={40} />
                            <Text>GitHub</Text>
                            <Progress percent={40} />
                        </div> */}
                        <h2>Habilidades</h2>
                        <div className='skill-flex' >
                          <div className='skill'>
                            <h3>Frontend</h3>
                            <ul>
                              <li>HTML</li>
                              <li>CSS</li>
                              <li>Javascript</li>
                              <li>React.js</li>
                              <li>Ant Design</li>
                              <li>Bootstrap</li>
                            </ul>
                          </div>
                          <div className='skill'>
                            <h3>Backend</h3>
                            <ul>
                              <li>Node.js</li>
                              <li>Express</li>
                              <li>MongoDB</li>
                            </ul>
                          </div>
                          <div className='skill'>
                            <h3>Tools</h3>
                            <ul>
                              <li>Git</li>
                              <li>Github</li>
                              <li>Trello</li>
                              <li>Visual Studio Code</li>
                              <li>Figma</li>
                              <li>Canva</li>
                            </ul>
                          </div>
                          <div className='skill'>
                            <h3>Metodologías Ágiles</h3>
                            <ul>
                              <li>Scrum</li>
                              <li>Kanban</li>
                            </ul>
                          </div>  
                        </div>

                    
                  
              </div>
          </Col>
          <Col xs={24} lg={12}>
            <div data-aos="fade-left">
              <h2>Educación</h2>
              <Timeline mode={mode}>
                <Timeline.Item label={info('03/2022 - 07/2022')}>
                  <div className=''>
                    <h3>Instituto Rush</h3>
                    <Text>Intensivo 1 (nivel correspondiente A1)</Text>
                  </div>
                </Timeline.Item>
                <Timeline.Item label={info('2022')}>
                  <div className=''>
                    <h3>Facultad de Ciencias Exáctas</h3>          
                    <Text>Estudiante de la carrera "Programación Universiataria"</Text>
                  </div>
                </Timeline.Item>
                <Timeline.Item label={info('10/2021 - 09/2022')}>
                  <div className=''>
                    <h3>RollingCode School</h3>
                    <Text>Desarrollo Web Full Stack (Mern)</Text>
                  </div>
                </Timeline.Item>
                <Timeline.Item label={info('2004 - 2008')}>
                  <div className=''>
                    <h3>Escuela de La Patria Comercio N°3</h3>
                    <Text>Polimodal</Text>
                  </div>
                </Timeline.Item>          
              </Timeline>
            </div>
          </Col>  
        </Row>

      </div>
      </div>
    </div>
  )
}
