import { Button, Card, Row } from 'antd';
import { cardInformation } from '../helpers/cardInformation';
const { Meta } = Card;

export const PortfolioCard = () => {
  return (
    <Row className='card-container'>
        {
            cardInformation.map( item => (
              <div data-aos="fade-up" key={item.title}>
                <Card
                hoverable
                style={{
                width: 300,
                margin: 10
                }}
                
                cover={<img alt={item.title} src={item.img} />}
                >
                    <Meta title={item.title} />
                    <p>Tecnologias: {item.tecnology}</p>
                    <div className="btn-flex">
                      <Button className='btn-second' ><a href={item.path} target='_blank' >Ver Proyecto</a></Button>
                      <Button className='btn-second' ><a href={item.github} target='_blank' >Repositorio</a></Button>
                    </div>
                </Card>
              </div>
            ))
            
        }

    </Row>
    
  )
}
