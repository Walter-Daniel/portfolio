import { Col, Progress, Row, Typography } from 'antd';
const { Text} = Typography;
import img from '../../assets/about.jpeg'

export const About = () => {
  return (
    <>
        <div className='bg-about' id='about'>
            <div className="section container-fluid">
                   <h2>Acerca de mi</h2> 
                <Row >
                    <Col  xs={24} lg={12} >
                        <div className="circle">
                            
                            <div className="big-circle"></div>
                        </div>
                        <div className='container-fluid img-flex'>
                            <picture className='img-curriculo'>
                                <img src={img} />  
                            </picture>
                            {/* <br />
                            <p>Soy un estudiante de la carrera "Programador Universiatario" en la UNT. Mis mayores fortalezas son mi paciencia y mi empeño en aprender. Cada paso, aunque pequeño que sea, es un avance y eso me motiva a desempeñarme cada día mejor en mi disciplina. Soy amante de la tecnología, fotografías, de la naturaleza y de las reuniones con amigos.</p>               */}
                        </div>
                    </Col>
                    <Col xs={24} lg={12} >
                        <div className='text-about'>
                         <div className="litle-circle"></div>
                            {/* <h3>Conocimientos:</h3>
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
                                <Progress percent={40} />
                                <Text>GitHub</Text>
                                <Progress percent={40} />
                            </div> */}
                           
                                <p>Soy un estudiante de la carrera "Programador Universiatario" en la UNT. Mis mayores fortalezas son mi paciencia y mi empeño en aprender. Cada paso, aunque pequeño sea, es un avance y eso me motiva a desempeñarme cada día mejor en mi disciplina. Soy amante de la tecnología, fotografías, de la naturaleza y de las reuniones con amigos.</p>
                           
                        </div>
                    </Col>
                </Row>
                <Row align='center'>
                    <div className='bars'>
                    <h3>Conocimientos:</h3>
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
                    </div>
                </Row>
            </div>
        </div>

    </>

   
  )
}
