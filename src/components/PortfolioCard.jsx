import { Button, Card, Row } from 'antd';
import { cardInformation } from '../helpers/cardInformation';
const { Meta } = Card;

export const PortfolioCard = () => {
  return (
    <Row className='card-container'>
        {
            cardInformation.map( item => (
                <Card
                hoverable
                style={{
                width: 480,
                margin: 10
                }}
                cover={<img alt={item.title} src={item.img} />}
                >
                    <Meta title={item.title} />
                    <p>Tecnologias: {item.tecnology}</p>
                    <Button className='btn-second' ><a href={item.path} target='_blank' >Ver el Proyecto</a></Button>
                </Card>
            ))
            
        }

    </Row>
    
  )
}
