import { Col, Row, Timeline, Tag, Typography, Progress, Tooltip, Card } from 'antd';
import { useState } from 'react';
import { skills } from '../helpers/skills';
const { Text} = Typography;

export const Education = () => {
  const [mode, setMode] = useState('left');
  const info = (text) => {
            return <Tag color="geekblue">{text}</Tag>}

  return (
    <div className='bg-education'>
      <div className='container-fluid'>
      <div data-aos="fade-up">
        
        <Row>
       
          <Col xs={24} lg={24}>
            <div >
              <h2  id='education'>Educación</h2>
              <Timeline
              mode={mode}
                items={[
                  {
                    label: info('03/2022 - Presente'),
                    children: (
                      <>
                        <h6>Instituto Rush</h6>
                        <p>Intensivo 2 (nivel correspondiente: A2)</p>
                      </>
                    ),
                  },
                  {
                    label: info('03/2022 - Presente'),
                    children: (
                      <>
                        <h6>Facultad de Ciencias Exáctas</h6>                  
                        <Text>Estudiante de la tecnicatura "Programador Universitario"</Text>
                      </>
                    ),
                  },
                  {
                    label: info('10/2021 - 05/2022'),
                    children: (
                      <>
                        <h6>RollingCode School</h6>
                        <Text>Desarrollo Web Full Stack (MERN)</Text>
                      </>
                    ),
                  },
                  {
                    label: info('2004 - 2008'),
                    children: (
                      <>
                        <h6>Escuela de La Patria Comercio N°3</h6>
                        <Text>Polimodal</Text>
                      </>
                    ),
                  },
                ]}
              />
            </div>
          </Col>  
        </Row>

      </div>
      </div>
    </div>
  )
}
