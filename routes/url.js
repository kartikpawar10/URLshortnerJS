import express from "express";
import handleGenerateNewUrl from "../controllers/url";
const router = express.Router();
router.post("/", handleGenerateNewUrl);
export default router;
