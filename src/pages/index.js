import {Inter} from 'next/font/google'

import ProductTables from "@/components/ProductTables";
import MyNavBar from "@/components/MyNavBar";
import Container from "react-bootstrap/Container";
import {Col, Form, Row} from "react-bootstrap";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <>
            <MyNavBar/>
            <Container>
                <h1>Product Collection- Table</h1>
                <Form>
                    <Row>
                        <Col>

                        </Col>
                        <Col>
                            <Form.Control placeholder="search" />
                        </Col>
                    </Row>
                </Form>
                <ProductTables/>
            </Container>

        </>
    )
}
