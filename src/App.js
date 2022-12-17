import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import { Connection } from "./Connection";
import Coo from "./Coo";

function App() {

  const [datas, setdata] = useState([]);

  const [states, setstates] = useState(false);


  return (
    <>
      <BrowserRouter>
       <Connection.Provider value={{datas, setdata, states, setstates}}>
          <Coo/>
          <Routing/>
       </Connection.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
