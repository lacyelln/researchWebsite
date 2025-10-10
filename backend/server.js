import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/api/login", (req, res) => {
  const { name, roomCode } = req.body;
  if (!name || !roomCode) {
    return res.status(400).json({ error: "Name and room code are required." });
  }
  res.json({ success: true, message: `Welcome ${name}!` });
});

app.get("/api/user", (req, res) => {
  const userId = parseInt(req.query.id);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
