import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

const PORT = process.env.PORT || 5000;

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running and connected to database`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed", error);
  });
