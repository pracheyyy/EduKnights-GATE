from flask import Flask, jsonify
import csv
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/questions")
def get_questions():
    questions = []
    with open("../data/gate_questions.csv", newline='', encoding="utf-8") as file:
        reader = csv.DictReader(file)
        for row in reader:
            questions.append(row)
    return jsonify(questions)

if __name__ == "__main__":
    app.run(debug=True)

