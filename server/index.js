const express = require("express");
require("dotenv").config();
require("./config/dbConnect");
const cors = require("cors");
const path = require("path");
const contactRoutes = require("./routes/contactRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Allowed Origins
const allowedOrigins = [
    "http://localhost:5173",
    "https://anas-portfolio-zeta-peach.vercel.app",
].filter(Boolean);

// CORS setup
app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        credentials: true,
    })
);

// Routes
app.use("/api/contacts", contactRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

// Only start listening in local development
if (process.env.NODE_ENV !== "production" && !process.env.VERCEL) {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;
