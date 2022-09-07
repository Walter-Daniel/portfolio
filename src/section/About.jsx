import { Col, Progress, Row, Typography } from 'antd';
const { Text} = Typography;
import img from '../../assets/foto-curriculo.jpg'

export const About = () => {
  return (
    <>
        <div className='bg-about'>
            <div className="section container-fluid">
                <Row >
                    <Col  xs={24} lg={12} >
                        <div className='container-fluid'>
                            <picture className='img-curriculo'>
                                <img src={img} />  
                            </picture>
                            <p>Estudiante de la carrera Programador Universiatario en la UNT. Siempre con ganas de aprender, soy proactivo, amante de la tecnologia, fotografías y de la naturaleza.</p>              
                        </div>
                    </Col>
                    <Col xs={24} lg={12} >
                        <div className='container-fluid'>
                            <h3>Conocimientos:</h3>
                            <div className='bars'>
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
                                <Progress percent={50} />
                                <Text>GitHub</Text>
                                <Progress percent={45} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>

    </>

   
  )
}
