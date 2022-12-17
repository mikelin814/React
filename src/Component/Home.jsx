import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { BrowserRouter, Link } from "react-router-dom";
import { useContext } from "react";
import { Connection } from "../Connection";

function Home() {


    const {datas, setdata,  states, setstates} = useContext(Connection)

  return (
    <div>
         {[states].map((v, k) => {
        if (v === false) {
          return (
            <div key={k} className="payload">
            <div className="insideload"></div>
          </div>
          );
        } else {
            return ( 
                <div key={k} >
                <h1 className="text-center">User Details</h1>
                <hr />
                <Container className="contai" style={{width: "100%"}}>
                  <Row className="ro" style={{gap: '10px', width: '100%'}}>
                    {datas.map((val, key) => {
                      if (val) {
                        return (
                          <Col className="cols shadow rounded p-2"  key={key} sm={8}>
                            <Card className="cad">
                              <Card.Header className="cadh" as="h5">
                                {val.name}
                              </Card.Header>
                              <Card.Title className="cad_t">{val.id}</Card.Title>
                              <Card.Text className="depart">{val.department}</Card.Text>
                              <Link to={"../usd/" + val.id} style={{width: "100%"}}>
                              <Button variant="primary" className="btn btn-primary ourbtns w-100">
                                <span>Read More</span>
                                <span>
                                  <i className="fa fa-caret-right"></i>
                                </span>
                              </Button>
                              </Link>
                            </Card>
                          </Col>
                        );
                      }
                    })}
                  </Row>
                </Container>
              </div>
            )
        }
      })}
    </div>
  )
}

export default Home