import { Button, Col, Progress, Row, Typography } from 'antd';
const { Text} = Typography;
import img from '../../assets/aboutTiny.png'

export const About = () => {
  return (
    <>
        <div className='bg-about' id='about'>
            <div className="section container-fluid" data-aos="fade-up">
                    <h2>Acerca de mí</h2>
                <Row >
                    <Col  xs={24} lg={14} >  
                        <div className='container-fluid img-flex'>
                            
                            <picture className='img-curriculo'>
                                <img src={img} />  
                            </picture>
                        </div>
                    </Col>
                    <Col xs={24} lg={10} >
                        <div className='text-about'>                                              
                            <h4>Hola! me llamo<br /><span>Walter Daniel Carrizo</span></h4>
                            <p>Soy Desarrollador Web FullStack (MERN) y estudiante de la tecnicatura "Programador Universitario" en la Universidad Nacional de Tucumán, Argentina. Mis mayores fortalezas son mi paciencia, mi empatía y mi empeño en aprender. Cada paso, aunque pequeño sea, es un avance y eso me motiva a desempeñarme cada día mejor en mi disciplina. Soy amante de la tecnología, fotografías y de la naturaleza. </p> 
                            <Button className='btn-second' ><a href="https://drive.google.com/file/d/1sf9NNWotXwRKgOXmo4lKyrvS7LiZvfUK/view?usp=sharing" target='_blank' >Ver CV</a></Button>
                    
                        </div>
                    </Col>
                </Row>
                
            </div>
        </div>

    </>

   
  )
}
