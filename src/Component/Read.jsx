import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Read() {

    const {id} = useParams()

    const [datas, setdata] = useState('');

    useEffect(() => {
        const url = `https://api.matgargano.com/employees/${id}`
        axios.get(url).then((res) => {
          setTimeout(() => {
            setdata(res.data)
          }, 2000);
        });
      }, []);

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 
'center', padding: '10px'}}>
        { 
          datas === "" ? <div className="payload">
            <div className="insideload"></div>
          </div> : 
          [datas].map((val, key) => { 
            return ( 
                <Card className='shadow' key={key}>
                <Card.Img variant="top" src={val.photo} style={{height: '400px', objectFit: 'cover',  objectPosition: '0 0 '}} />
                <Card.Body>
                    <Card.Title>{val.name}</Card.Title>
                    <Card.Text>
                     Department:  {val.department}
                    </Card.Text>
                    <Card.Text>
                     id:  {val.id}
                    </Card.Text>
                    <Card.Text>
                      role: {val.role}
                    </Card.Text>
                    <Card.Text>
                      Start Date: {val.startDate}
                    </Card.Text>
                </Card.Body>
                </Card>
            )
           })
        }
    </div>
  )
}

export default Read