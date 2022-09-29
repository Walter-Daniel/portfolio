import { Col, Progress, Row, Typography } from 'antd';
const { Text} = Typography;
import img from '../../assets/imagen-portfolio1.jpg'

export const About = () => {
  return (
    <>
        <div className='bg-about' id='about'>
            <div className="section container-fluid animate__animated animate__fadeIn">

                
             
                <Row >
                    <Col  xs={24} lg={14} >
                        
                        <div className='container-fluid img-flex'>
                            <picture className='img-curriculo'>
                                <img src={img} />  
                            </picture>
                            {/* <br />
                            <p>Soy un estudiante de la carrera "Programador Universiatario" en la UNT. Mis mayores fortalezas son mi paciencia y mi empeño en aprender. Cada paso, aunque pequeño que sea, es un avance y eso me motiva a desempeñarme cada día mejor en mi disciplina. Soy amante de la tecnología, fotografías, de la naturaleza y de las reuniones con amigos.</p>               */}
                        </div>
                    </Col>
                    <Col xs={24} lg={10} >
                        <div className='text-about'>                         
                            <h2>Acerca de mi</h2> 
                            <p>Hola!, mi nombre es Walter Daniel Carrizo y soy un estudiante de la carrera "Programador Universiatario" en la UNT. Mis mayores fortalezas son mi paciencia y mi empeño en aprender. Cada paso, aunque pequeño sea, es un avance y eso me motiva a desempeñarme cada día mejor en mi disciplina. Soy amante de la tecnología, fotografías y de la naturaleza. </p>
                           
                        </div>
                    </Col>
                </Row>
                
            </div>
        </div>

    </>

   
  )
}
