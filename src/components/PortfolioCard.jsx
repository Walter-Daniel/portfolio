import { Card, Row } from 'antd';
import { Button } from 'react-bootstrap';
import { cardInformation } from '../helpers/cardInformation';
import { DropdownCard } from './DropdownCard';
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
                minHeight:350 ,
                margin: 10
                }}
                
                cover={<img alt={item.title} src={item.img} />}
                >
                    <Meta title={item.title} />
                    <p>Tecnologias: {item.tecnology}</p>
                    <div className="btn-flex">
                      <Button variant='outline-warning' href={item.path} target='_blank' size='sm'>Ver Proyecto</Button>
                      <DropdownCard frontend={item.github} backend={item.githubBack}/> 
                    </div>
                </Card>
              </div>
            ))
            
        }

    </Row>
    
  )
}
