require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Pool } = require("pg");
const { z } = require("zod");
const crypto = require("crypto");

const app = express();
const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: process.env.PGSSL === "true" ? { rejectUnauthorized: false } : undefined });
const PORT = Number(process.env.PORT || 3000);
const JWT_SECRET = process.env.JWT_SECRET;
const OWNER_USERNAME = process.env.OWNER_USERNAME || "owner";
const OWNER_INITIAL_PASSWORD = process.env.OWNER_INITIAL_PASSWORD;

app.use(express.json());
app.use(cors());

app.get("/api/health", (req,res) => res.json({ok:true, service:"SADAD API"}));

app.listen(PORT,()=>console.log(\`SADAD API listening on :\${PORT}\`));