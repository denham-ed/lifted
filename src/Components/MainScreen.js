import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const MainScreen = ({title, children}) => {
  return (
    <div>
        <Container>
            <Row>
                <Col>
                <h1>{title}</h1>
                </Col>
                <hr />
            </Row>
    {children}
        </Container>

    </div>
  )
}

export default MainScreen