import { Col, Row } from 'antd'
import React from 'react'
import { PortfolioCard } from '../components/PortfolioCard'

export const Portfolio = () => {
  return (
    <div className="bg-education">
      <div className='container-fluid'>
      <h2>Portfolio</h2>
      <Row gutter={[16, 16]}>
        <Col >
          <PortfolioCard />
        </Col>
      </Row>
    </div>
    </div>
  )
}
