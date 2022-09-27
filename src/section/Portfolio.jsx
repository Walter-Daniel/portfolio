import { Col, Row } from 'antd'
import React from 'react'
import { PortfolioCard } from '../components/PortfolioCard'

export const Portfolio = () => {
  return (
    <div  id='portfolio'>
      <div className='container-fluid'>
      <div data-aos="zoom-in">
        <h2>Portfolio</h2>
      </div>
      <Row gutter={[16, 16]}>
        <Col >
          <PortfolioCard />
        </Col>
      </Row>
    </div>
    </div>
  )
}
