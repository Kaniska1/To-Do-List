# 📝 To-Do List App

A simple, dark-themed To-Do List web application built with **Node.js**, **Express**, and vanilla **HTML/CSS/JavaScript**. Add tasks, view them in real time, and delete them with a single click.

---

## ✨ Features

- Add new tasks via a clean input form
- View all current tasks in a styled list
- Delete individual tasks instantly
- Fully responsive design — works on desktop and mobile
- Dark theme UI with smooth hover transitions

---

## 🛠 Tech Stack

| Layer    | Technology              |
|----------|-------------------------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend  | Node.js, Express.js     |
| Storage  | In-memory (server-side array) |

---

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) v14 or later
- npm (bundled with Node.js)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Kaniska1/To-Do-List.git
cd To-Do-List
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the server

```bash
npm start
```

The app will be available at **http://localhost:3000**.

> **Note:** Tasks are stored in memory and will be cleared when the server restarts.

---

## 📁 Project Structure

```
To-Do-List/
├── index.html       # Frontend UI (form, task list, client-side JS)
├── styles.css       # Dark-theme stylesheet
├── server.js        # Express server & REST API
├── package.json     # Project metadata and dependencies
└── README.md        # Project documentation
```

---

## 🔌 API Reference

| Method   | Endpoint       | Description          | Request Body           | Response             |
|----------|----------------|----------------------|------------------------|----------------------|
| `GET`    | `/tasks`       | Retrieve all tasks   | —                      | `[{ "id": number, "text": string }, …]` |
| `POST`   | `/tasks`       | Add a new task       | `{ "text": "…" }`     | `{ "id": number, "text": string }`      |
| `DELETE` | `/tasks/:id`   | Delete a task by ID  | —                      | `204 No Content`     |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).