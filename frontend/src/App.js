import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/questions")
      .then((response) => {
        setQuestions(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={styles.container}>
        <h2>Loading GATE questions...</h2>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>⚔️ EduKnights – GATE Edition</h1>

      {questions.map((q) => (
        <div key={q.id} style={styles.card}>
          <h3>{q.question}</h3>

          {Object.entries(q.options).map(([key, value]) => (
            <p key={key} style={styles.option}>
              <b>{key}.</b> {value}
            </p>
          ))}

          <p style={styles.meta}>
            Subject: {q.subject} | Marks: {q.marks}
          </p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#0f172a",
    minHeight: "100vh",
    color: "white",
    padding: "20px",
    fontFamily: "Arial",
  },
  title: {
    textAlign: "center",
    marginBottom: "30px",
  },
  card: {
    backgroundColor: "#1e293b",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "10px",
  },
  option: {
    marginLeft: "10px",
  },
  meta: {
    marginTop: "10px",
    fontSize: "12px",
    color: "#cbd5f5",
  },
};

export default App;
