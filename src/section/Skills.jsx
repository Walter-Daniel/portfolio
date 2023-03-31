import { Col, Row, Timeline, Tag, Typography, Progress, Tooltip, Card } from 'antd';
import { useState } from 'react';
import { skills } from '../helpers/skills';
const { Text} = Typography;

export const Skills = () => {
  const info = (text) => {
            return <Tag color="geekblue">{text}</Tag>}

  return (
    <div className='bg-skills' id='skills'>
      <div className='container-fluid'>
      <div data-aos="zoom-in"> 
        <Row>
        <Col xs={24} lg={24}>
              <div data-aos="fade-up">          
                <h2 >Habilidades</h2>
                <div className='skill-flex' >
                    <Card title="Frontend" style={{ width: 260 }}>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>Javascript</p>
                        <p>React.js</p>
                        <p>React Redux Toolkit</p>
                        <p>Ant Design</p>
                        <p>Bootstrap</p>
                    </Card>                   
                    <Card title="Backend" style={{ width: 260 }}>
                        <p>Node.js</p>
                        <p>Express</p>
                        <p>Mongoose</p>
                        <p>JASON Web Token</p>
                        <p>MongoDB</p>
                        <p>MySQL</p>
                        <p>Bcryptjs</p>
                    </Card>
                    <Card title="Herramientas" style={{ width: 260 }}>
                        <p>Git</p>
                        <p>Github</p>
                        <p>Trello</p>
                        <p>Visual Studio Code</p>
                        <p>Figma</p>
                        <p>Canva</p>
                    </Card>
                    <Card title="Metodologías Ágiles" style={{ width: 260 }}>
                        <li>Scrum</li>
                        <li>Kanban</li>
                    </Card>
                </div>          
              </div>
          </Col>
            
        </Row>

      </div>
      </div>
    </div>
  )
}
