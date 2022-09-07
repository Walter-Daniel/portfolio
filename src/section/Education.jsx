import { Col, Row, Timeline, Tag, Typography } from 'antd'
import { useState } from 'react'
const { Text} = Typography;

export const Education = () => {
  const [mode, setMode] = useState('left');
  const info = (text) => {
            return <Tag color="geekblue">{text}</Tag>}

  return (
    <div className='bg-education'>
      <div className='container-fluid'>
        <h2>Educación</h2>
        <Row>
          <Col xs={24} lg={24}>
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
          </Col>
          <Col xs={24} lg={12}>
            <Timeline >
              
            </Timeline>
          </Col>
        </Row>
      </div>
    </div>
  )
}
