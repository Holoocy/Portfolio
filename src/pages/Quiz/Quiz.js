import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Col, Row } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";

function Quiz() {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=30").then((response) => {
      // Shuffle the answers for each question
      const shuffledData = response.data.results.map((question) => {
        // Combine correct and incorrect answers into an array
        const answers = [
          question.correct_answer,
          ...question.incorrect_answers,
        ];

        // Shuffle the answers
        const shuffledAnswers = answers.sort(() => Math.random() - 0.5);

        // Replace the answers in the question object
        return {
          ...question,
          answers: shuffledAnswers,
        };
      });

      setQuizData(shuffledData);
    });
  }, []);

  function handleNextQuestion() {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null); // Clear the selected answer when moving to the next question
    } else {
      alert("End of the Quiz!");
    }
  }

  function handlePrevQuestion() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null); // Clear the selected answer when moving to the previous question
    } else {
      alert("End of the Quiz");
    }
  }

  function handleAnswerChange(event) {
    setSelectedAnswer(event.target.value);
  }

  return (
    <div className="">
      <Container className="p-5 col-xl-5 col-sm-5">
        <Card className="mt-5">
          <Card.Body>
            <div>
              <h1 className="text-center">
                {quizData[currentQuestion]?.question}
              </h1>
            </div>
            <div>
              <Row>
                {quizData[currentQuestion]?.answers.map((answer, index) => (
                  <div className="p-2 mx-3" key={index}>
                    <input
                      className="m-2"
                      type="radio"
                      name="answer"
                      id={`answer${index}`}
                      value={answer}
                      checked={selectedAnswer === answer}
                      onChange={handleAnswerChange}
                    />
                    <label htmlFor={`answer${index}`}>{answer}</label>
                  </div>
                ))}
              </Row>
              <Col className="mt-3">
                <button
                  className="btn btn-success btn-lg mx-5"
                  onClick={handlePrevQuestion}
                >
                  Preview
                </button>
                <button
                  className="btn btn-success btn-lg mx-5 float-end"
                  onClick={handleNextQuestion}
                >
                  Next
                </button>
              </Col>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
export default Quiz;
