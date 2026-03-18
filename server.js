const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

let tasks = [];
let nextId = 1;

// Get all tasks
app.get('/tasks', (req, res) => {
	res.json(tasks);
});

// Add a new task
app.post('/tasks', (req, res) => {
	const { text } = req.body;
	if (!text || typeof text !== 'string') {
		return res.status(400).json({ error: 'Task text required' });
	}
	const task = { id: nextId++, text };
	tasks.push(task);
	res.status(201).json(task);
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
	const id = parseInt(req.params.id);
	const idx = tasks.findIndex(t => t.id === id);
	if (idx === -1) {
		return res.status(404).json({ error: 'Task not found' });
	}
	tasks.splice(idx, 1);
	res.status(204).end();
});

// Serve index.html for root
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
	console.log(`To-Do app listening at http://localhost:${PORT}`);
});
