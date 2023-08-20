import React, { useState, useEffect } from "react";
import img from "./indianews.jpg";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Entertain(props) {
  const [data, setdata] = useState([]);
  const [offset, setoffset] = useState(0);
  const [count, setcount] = useState(0);

  useEffect(() => {
    const info = async () => {
      try {
        const alldata = await axios.get(
          `https://inshorts.me/news/topics/entertainment?offset=${offset}&limit=32`
        );
        setdata(alldata.data.data.articles);
        setcount(alldata.data.data.count)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    info();
  }, [offset,count]);

  return (
    <div className={`bg-${props.mode} my-3 p-5`}>
      <Container fluid>
        <Row className="Row">
          {data.map((value) => {
            return (
              <div key={value.hashId}>
                <a href={value.sourceUrl} className="nav-link link" target="blank_">
                  <Col className="container-fluid mt-4">
                    <Card className="card">
                      <Card.Img
                        variant="top"
                        src={value.imageUrl ? value.imageUrl : img}
                        className="img"
                      />
                      <Card.Title className="title">
                        {value.title.slice(0, 60)}...
                      </Card.Title>
                    </Card>
                  </Col>
                </a>
              </div>
            );
          })}
        </Row>
      </Container>

      <div className="container d-flex justify-content-between mt-5">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {setoffset(offset - 32);}}
          disabled={offset <= 0}
        >
          &larr; Privious
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {setoffset(offset + 32);}}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}
