import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Profile from "../pages/Profile";
import Stopwatch from "../pages/stopwatch/Stopwatch";
import Calculator from "../pages/calculator/Calculator";
import Quiz from "../pages/Quiz/Quiz";
import Weather from "../pages/Weather";
import Dictionary from "../pages/Dictionary/Dictionary";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./Dashboard.css";

function Dashboard(props) {
  return (
    <div>
      {
        <Container fluid className=" container-fluid">
          <Row>
            <Col className="text-white bg-dark  p-4">
              <Col>
                <nav className="text-white bg-dark ">
                  <span className=" bg-primary navbar-brand ms-2 ">
                    <h1>OLUSI GBENGA PORTFOLIO</h1>
                  </span>
                </nav>
              </Col>
            </Col>
          </Row>
          <Row>
            <Col className="bg-secondary   p-2" sm={3} md={2}>
              <Row className="m-2">
                <Link className=" bg-info rounded mb-2" to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.5em"
                    viewBox="0 0 576 692"
                  >
                    <path
                      d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0
                      22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1
                      0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64
                      24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6
                      .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17
                      10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                    />
                  </svg>
                  <button className="bg-info border border-info mx-3 ps-1  ">
                    Profile
                  </button>
                </Link>

                <Link className="bg-info rounded mb-2" to="/stopwatch">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.5em"
                    viewBox="0 0 576 692"
                  >
                    <path
                      d="M0 32C0 14.3 14.3 0 32 0H64 320h32c17.7 0 32 14.3 32 32s-14.3 32-32
                     32V75c0 42.4-16.9 83.1-46.9 113.1L237.3 256l67.9 67.9c30 30 46.9 70.7 46.9
                      113.1v11c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 64 32c-17.7 0-32-14.3-32-32s14.3-32
                      32-32V437c0-42.4 16.9-83.1 46.9-113.1L146.7 256 78.9 188.1C48.9 158.1 32 117.4 32 75V64C14.3
                       64 0 49.7 0 32zM96 64V75c0 25.5 10.1 49.9 28.1 67.9L192 210.7l67.9-67.9c18-18 28.1-42.4 28.
                       1-67.9V64H96zm0 384H288V437c0-25.5-10.1-49.9-28.1-67.9L192 301.3l-67.9 67.9c-18 18-28.1 42.4-28.1
                        67.9v11z"
                    />
                  </svg>
                  <button className="bg-info border border-info mx-3 ps-1">
                    Stopwatch
                  </button>
                </Link>

                <Link className="bg-info rounded mb-2" to="/calculator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.5em"
                    viewBox="0 0 576 692"
                  >
                    <path
                      d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7
                                       64-64V64c0-35.3-28.7-64-64-64H64zM96 64H288c17.7 0 32 14.3 32 32v32c0 17.7-14.3
                                        32-32 32H96c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zm32 160a32 32 0 1 1
                                         -64 0 32 32 0 1 1 64 0zM96 352a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM64 416c0-17.7
                                          14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM192
                                          256a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm64-64a32
                                           32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM288 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64z"
                    />
                  </svg>
                  <button className="bg-info border border-info mx-3 ps-1">
                    Calculator
                  </button>
                </Link>

                <Link className="bg-info rounded mb-2" to="/quiz">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.5em"
                    viewBox="0 0 576 692"
                  >
                    <path
                      d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 
                                      32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384
                                       96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16
                                        16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8
                                         0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                    />
                  </svg>
                  <button className="bg-info border border-info mx-3 ps-1">
                    Quiz
                  </button>
                </Link>

                <Link className="bg-info rounded mb-2" to="/weather">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.5em"
                    viewBox="0 0 576 692"
                  >
                    <path
                      d="M0 224c0 53 43 96 96 96h47.2L290 202.5c17.6-14.1 42.6-14 60.2 .2s22.8
                     38.6 12.8 58.8L333.7 320H352h64c53 0 96-43 96-96s-43-96-96-96c-.5 0-1.1 0-1.6
                      0c1.1-5.2 1.6-10.5 1.6-16c0-44.2-35.8-80-80-80c-24.3 0-46.1 10.9-60.8 28C256.5
                       24.3 219.1 0 176 0C114.1 0 64 50.1 64 112c0 7.1 .7 14.1 1.9 20.8C27.6 145.4 0
                        181.5 0 224zm330.1 3.6c-5.8-4.7-14.2-4.7-20.1-.1l-160 128c-5.3 4.2-7.4 11.4-5.1
                         17.8s8.3 10.7 15.1 10.7h70.1L177.7 488.8c-3.4 6.7-1.6 14.9 4.3 19.6s14.2 4.7 20.1
                          .1l160-128c5.3-4.2 7.4-11.4 5.1-17.8s-8.3-10.7-15.1-10.7H281.9l52.4-104.8c3.4-6.7
                           1.6-14.9-4.2-19.6z"
                    />
                  </svg>
                  <button className="bg-info border border-info mx-3 ps-1">
                    Weather
                  </button>
                </Link>

                <Link className="bg-info rounded mb-2" to="/dictionary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.5em"
                    viewBox="0 0 576 692"
                  >
                    <path
                      d="M0 96C0 43 43 0 96 0H384h32c17.7 0 32 14.3 32 32V352c0 17.7-14.3 
                    32-32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384 96c-53 0-96-43-96-96V96zM64
                     416c0 17.7 14.3 32 32 32H352V384H96c-17.7 0-32 14.3-32 32zM247.4 283.8c-3.7 3.7-6.2
                      4.2-7.4 4.2s-3.7-.5-7.4-4.2c-3.8-3.7-8-10-11.8-18.9c-6.2-14.5-10.8-34.3-12.2-56.9h63c-1.5
                       22.6-6 42.4-12.2 56.9c-3.8 8.9-8 15.2-11.8 18.9zm42.7-9.9c7.3-18.3 12-41.1 13.4-65.9h31.1c-4.7
                        27.9-21.4 51.7-44.5 65.9zm0-163.8c23.2 14.2 39.9 38 44.5 65.9H303.5c-1.4-24.7-6.1-47.5-13.4-65
                        .9zM368 192a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zM145.3 208h31.1c1.4 24.7 6.1 47.5 13.4 65
                        .9c-23.2-14.2-39.9-38-44.5-65.9zm31.1-32H145.3c4.7-27.9 21.4-51.7 44.5-65.9c-7.3 18.3-12 41.1-13.4
                        65.9zm56.1-75.8c3.7-3.7 6.2-4.2 7.4-4.2s3.7 .5 7.4 4.2c3.8 3.7 8 10 11.8 18.9c6.2 14.5 10.8 34.3 12.2
                        56.9h-63c1.5-22.6 6-42.4 12.2-56.9c3.8-8.9 8-15.2 11.8-18.9z"
                    />
                  </svg>
                  <button className="bg-info border border-info mx-3 ps-1">
                    Dictionary
                  </button>
                </Link>

              </Row>
            </Col>
            <Col>
              <Routes>
                <Route exact path="/" element={<Profile />} />
                <Route path="/stopwatch" element={<Stopwatch />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/weather" element={<Weather />} />
                <Route path="/dictionary" element={<Dictionary />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      }
    </div>
  );
}
export default Dashboard;
