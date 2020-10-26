import express from 'express'
const router = express.Router();
import { authenticate, register } from "../controllers/user";

router.post('/login', authenticate);
router.post('/register', register);

export default router;