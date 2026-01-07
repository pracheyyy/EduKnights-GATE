import React, { useEffect, useState } from "react";
import axios from "axios";

const styles = {
  page: {
    background: "#f4f6fb",
    minHeight: "100vh",
    padding: "40px",
    fontFamily: "Arial, sans-serif"
  },
  container: {
    maxWidth: "800px",
    margin: "auto",
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
  },
  title: {
    textAlign: "center",
    marginBottom: "30px"
  },
  card: {
    marginBottom: "25px",
    padding: "20px",
    borderRadius: "8px",
    border: "1px solid #ddd"
  },
  option: {
    display: "block",
    margin: "8px 0",
    cursor: "pointer"
  },
  button: {
    display: "block",
    margin: "30px auto",
    padding: "12px 30px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "none",
    background: "#4f46e5",
    color: "#fff",
    cursor: "pointer"
  },
  correct: {
    background: "#e8ffe8",
    border: "1px solid #4caf50"
  },
  wrong: {
    background: "#ffe8e8",
    border: "1px solid #f44336"
  }
};

function App() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/questions")
      .then(res => setQuestions(res.data));
  }, []);

  const handleSelect = (qIndex, option) => {
    setAnswers({ ...answers, [qIndex]: option });
  };

  const submitQuiz = () => {
    let total = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.answer) total++;
    });
    setScore(total);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={styles.page}>
        <div style={styles.container}>
          <h1 style={styles.title}>Quiz Completed ✅</h1>
          <h2 style={{ textAlign: "center" }}>
            Your Score: {score} / {questions.length}
          </h2>

          <hr />

          {questions.map((q, i) => {
            const isCorrect = answers[i] === q.answer;

            return (
              <div
                key={i}
                style={{
                  ...styles.card,
                  ...(isCorrect ? styles.correct : styles.wrong)
                }}
              >
                <strong>Q{i + 1}. {q.question}</strong>

                <p>
                  Your Answer: <b>{answers[i] || "Not Answered"}</b>
                  {isCorrect ? " ✅" : " ❌"}
                </p>

                {!isCorrect && (
                  <p>Correct Answer: <b>{q.answer}</b></p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>EduKnights – GATE Quiz</h1>

        {questions.map((q, i) => (
          <div key={i} style={styles.card}>
            <h3>{i + 1}. {q.question}</h3>

            {["A", "B", "C", "D"].map(opt => (
              <label key={opt} style={styles.option}>
                <input
                  type="radio"
                  name={`q${i}`}
                  onChange={() => handleSelect(i, opt)}
                />{" "}
                <b>{opt}:</b> {q[opt]}
              </label>
            ))}
          </div>
        ))}

        <button style={styles.button} onClick={submitQuiz}>
          Submit Quiz
        </button>
      </div>
    </div>
  );
}

export default App;


