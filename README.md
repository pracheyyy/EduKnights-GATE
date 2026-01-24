# ⚔️ EduKnights  
### A Real-Time Battle-Based Learning Platform for Competitive Exam Preparation

## 📌 Overview
EduKnights is a full-stack web application designed to transform competitive exam preparation into an engaging, competitive, and analytical experience. The platform enables students to participate in real-time 1v1 quiz battles, simulating exam pressure while improving accuracy, speed, and conceptual clarity.

This project is developed as a portfolio-grade system design project with a strong focus on computer science fundamentals, making it highly relevant for GATE (CSE/IT) aspirants.

---

## 🎯 Problem Statement
Competitive exam aspirants often rely on passive learning methods such as video lectures and static question banks. These methods:
- Lack real-time competition
- Do not simulate actual exam pressure
- Provide limited performance analytics
- Fail to keep students consistently motivated

As a result, students struggle with speed, accuracy, and effective self-assessment.

---

## 💡 Proposed Solution
EduKnights introduces a battle-based learning approach where students compete in timed quizzes against peers. The platform provides instant feedback, real-time comparison, and performance tracking, encouraging active learning and continuous improvement.

---

## 🧠 Key Features
- User authentication and profile management  
- Subject-wise quiz battles (Organic, Inorganic, Physical Chemistry)  
- Real-time 1v1 matchmaking system  
- Timed quizzes simulating exam conditions  
- Automatic score evaluation and winner declaration  
- Battle history and performance analytics  
- Admin dashboard for question management  

---

## 🏗️ System Architecture
Client (React)  
→ REST APIs  
→ Server (Node.js + Express)  
→ Real-time Communication (Socket.io)  
→ Database (MongoDB)

---

## 🛠️ Technology Stack

### Frontend
- React.js  
- Tailwind CSS  
- JavaScript (ES6+)  

### Backend
- Node.js  
- Express.js  
- RESTful APIs  

### Database
- MongoDB  
- Mongoose ODM  

### Authentication
- JWT (JSON Web Tokens)  

### Real-Time Communication
- Socket.io  

### Deployment
- Vercel (Frontend)  
- Render (Backend)  

---

## 📦 Core Modules
1. Authentication Module – Secure login and registration  
2. Battle Engine – Timer, scoring, and result logic  
3. Matchmaking System – Real-time opponent pairing  
4. Question Bank – Categorized and difficulty-based questions  
5. Leaderboard & Analytics – Rank and performance tracking  
6. Admin Panel – Question and data management  

---

## 📊 Database Design (High-Level)

### User
- Name  
- Email  
- Encrypted password  
- Battles played  
- Battles won  
- Rating score  

### Question
- Subject  
- Chapter  
- Difficulty  
- Question text  
- Options  
- Correct answer  

### Battle
- Player 1  
- Player 2  
- Subject  
- Questions attempted  
- Scores  
- Winner  
- Timestamp  

---

## 🎓 Academic & GATE Relevance
This project demonstrates understanding of:
- Client–Server architecture  
- RESTful API design  
- Database schema modeling  
- Authentication and authorization  
- Real-time systems  
- Software engineering principles  

The project aligns with GATE CSE/IT topics such as:
- Web technologies  
- Databases  
- Software engineering  
- System design concepts  

---

## 🚀 Future Enhancements
- AI-based performance analysis  
- Rank prediction system  
- Group battles and tournaments  
- Detailed subject-wise analytics  
- Mobile application support  

---

## 👩‍💻 Developer
Prachi Patil (pracheyyy)  

---

## 📄 License
This project is developed for academic and learning purposes.
