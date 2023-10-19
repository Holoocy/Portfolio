import { React, useState } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Col, Row } from "react-bootstrap";

function Dictionary() {
  // Setting up the initial states using react hook 'useState'

  const [data, setData] = useState("");
  const [searchWord, setSearchWord] = useState("");

 
  function getMeaning() {
    Axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`
    ).then((response) => {
      setData(response.data[0]);
    });
    }
    

    return (
      <div>
        <Container className="p-5 col-lg-5 col-sm-5">
          <h1 className="text-center pt-5 m-3"> Dictionary</h1>
          <Card className="mt-2">
            <Card.Body>
              <div>
               
                    <div className="text-center m-3">
                      <input
                        className="pt-1 pb-1"
                        type="text"
                        placeholder="Search..."
                        onChange={(e) => {
                          setSearchWord(e.target.value);
                        }}
                      />
                      <button
                        className="btn btn-success rounded-0"
                        onClick={() => {
                          getMeaning();
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1.2em"
                          viewBox="0 0 712 512"
                        >
                          <path
                            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 
                      45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0
                      208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                          />
                        </svg>
                      </button>
                    </div>
                
                    {data && (
                      <div className="showResults">
                        <h2 className="">{data.word} </h2>
                        <h4 className="">Parts of speech:</h4>

                        <p>{data.meanings[0].partOfSpeech}</p>

                        <h4 className="">Definition:</h4>

                        <p>{data.meanings[0].definitions[0].definition}</p>
                      </div>
                    )}
                
              </div>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
}

export default Dictionary;
