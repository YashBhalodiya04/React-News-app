import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import img from "./indianews.jpg";

export default function Business(props) {
  const [data, setdata] = useState([]);
  const [page, setPage]= useState(1)

  useEffect(() => {
    const info = async () => {
      try {
        const alldata = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&category=business&pageSize=32&page=${page}&apiKey=e029de8405d141769b4a0e2507d91426`
        );
        setdata(alldata.data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    info();
  }, [page]);

  return (
    <div className={`bg-${props.mode} my-3 p-5`}>
      <Container fluid>
        <Row className="Row">
          {data.map((value) => {
            return (
              <div key={value.content}>
                <a href={value.url} className="nav-link link" target="blank_">
                  <Col className="container mt-4">
                    <Card className="card">
                      <Card.Img
                        variant="top"
                        src={value.urlToImage ? value.urlToImage : img}
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
          onClick={() => {setPage(page - 1 );}}
          disabled={page <= 1}
        >
          &larr; Privious
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {setPage(page + 1);}}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}
