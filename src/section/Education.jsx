import { Col, Row, Timeline, Tag, Typography, Progress, Tooltip, Card } from 'antd';
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
      <div data-aos="fade-up">
        
        <Row>
       
          <Col xs={24} lg={24}>
            <div >
              <h2>Educación</h2>
              <Timeline mode={mode}>
                <Timeline.Item label={info('03/2022 - Presente')}>
                  <div className=''>
                    <h3>Instituto Rush</h3>
                    <Text>Intensivo 2 (nivel correspondiente: A2)</Text>
                  </div>
                </Timeline.Item>
                <Timeline.Item label={info('03/2022 - Presente')}>
                  <div className=''>
                    <h3>Facultad de Ciencias Exáctas</h3>          
                    <Text>Estudiante de la tecnicatura "Programador Universitario"</Text>
                  </div>
                </Timeline.Item>
                <Timeline.Item label={info('10/2021 - 05/2022')}>
                  <div className=''>
                    <h3>RollingCode School</h3>
                    <Text>Desarrollo Web Full Stack (MERN)</Text>
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
