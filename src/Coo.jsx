import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { BrowserRouter, Link } from "react-router-dom";
import { useContext } from "react";
import { Connection } from "./Connection";
function Coo() {

    
    const {datas, setdata, states, setstates} = useContext(Connection)

    useEffect(() => {
      axios.get("https://api.matgargano.com/employees").then((res) => {
        if (res.data.length > 0) {
           setTimeout(() => {
            setdata(res.data);
          setstates(true);
           }, 2000);
        }
      });
    }, []);

  return (
    <div style={{display: 'none'}}></div>
  )
}

export default Coo