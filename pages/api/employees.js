import db from "../../db";

export default function handler(req, res) {
  db.query("SELECT * FROM employees", (error, results) => {
    if (error) {
      res.status(500).json({ message: "Internal server error" });
      return;
    }
    res.status(200).json(results);
  });
}
