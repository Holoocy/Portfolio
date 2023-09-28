import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Profile from "../pages/Profile";
import Stopwatch from "../pages/stopwatch/Stopwatch";
import Calender from "../pages/Calender";
import Calculator from "../pages/calculator/Calculator";
import Quiz from "../pages/Quiz/Quiz";
import Weather from "../pages/Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                      d="M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64V75c0 42.4 16.9 83.1 46.9 
                                      113.1L146.7 256 78.9 323.9C48.9 353.9 32 394.6 32 437v11c-17.7 0-32 14.3-32
                                       32s14.3 32 32 32H64 320h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V437c0-42.4-16
                                       .9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1V64c17.7 0
                                       32-14.3 32-32s-14.3-32-32-32H320 64 32zM288 437v11H96V437c0-25.5 10.1-49.9
                                        28.1-67.9L192 301.3l67.9 67.9c18 18 28.1 42.4 28.1 67.9z"
                    />
                  </svg>
                  <button className="bg-info border border-info mx-3 ps-1">
                    Stopwatch
                  </button>
                </Link>

                <Link className="bg-info rounded mb-2" to="/calender">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.5em"
                    viewBox="0 0 576 692"
                  >
                    <path
                      d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7
                                       0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144
                                        128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48
                                         192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0
                                          160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272
                                          248H176V192h96v56z"
                    />
                  </svg>
                  <button className="bg-info border border-info mx-3 ps-1">
                    Calender
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
                      d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61
                                      .9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7
                                       0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7
                                        .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"
                    />
                  </svg>
                  <button className="bg-info border border-info mx-3 ps-1">
                    Weather
                  </button>
                </Link>
              </Row>
            </Col>
            <Col>
              <Routes>
                <Route exact path="/" element={<Profile />} />
                <Route path="/stopwatch" element={<Stopwatch />} />
                <Route path="/calender" element={<Calender />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/weather" element={<Weather />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      }
    </div>
  );
}
export default Dashboard;
