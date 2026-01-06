from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd
import os

app = Flask(__name__)
CORS(app)

# Path to CSV file
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CSV_PATH = os.path.join(BASE_DIR, "data", "gate_questions.csv")

def load_questions():
    df = pd.read_csv(CSV_PATH)

    questions = []
    for _, row in df.iterrows():
        questions.append({
            "id": int(row["id"]),
            "subject": row["subject"],
            "question": row["question"],
            "options": {
                "A": row["optionA"],
                "B": row["optionB"],
                "C": row["optionC"],
                "D": row["optionD"]
            },
            "marks": int(row["marks"])
        })
    return questions


@app.route("/")
def home():
    return "EduKnights GATE Backend Running 🚀"


@app.route("/api/questions", methods=["GET"])
def get_questions():
    questions = load_questions()
    return jsonify(questions)


if __name__ == "__main__":
    app.run(debug=True)
