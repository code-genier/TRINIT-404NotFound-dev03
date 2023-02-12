import express from "express";
import { getTechFeedPosts, likeTechPost } from "../controllers/techPost.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getTechFeedPosts);
// router.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */
router.patch("/:id/like", verifyToken, likeTechPost);

export default router;
